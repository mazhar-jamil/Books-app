import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginHandle() {

  const navigateLoginHandlePage = useNavigate();
  // ✅ LocalStorage se users lo ya default users set karo
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { username: "mazhar", password: "mazhar123", email: "mazharjamill@gmail.com", role: "admin"},
          { username: "azhar", password: "azhar123", email: "azharQureshi@gmail.com", role: "user"},
          { username: "gulraiz", password: "gull", email: "gulraizmalana@gmail.com", role: "user"},
        ];
  });
  // ✅ Jab users update ho, to localStorage me save karo
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  // ✅ Admin banane ka function
  const makeAdmin = (username) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.username === username ? 
      { ...user, role: user.role === "admin" ? "user" : "admin"} : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const removeUser = (currentUsers) => {
    setUsers((prevUsers) => {
      const removeUserWeb = prevUsers.filter((prevUserName) => prevUserName.username !== currentUsers)
      localStorage.setItem("users", JSON.stringify(removeUserWeb))
    });
  };

  // ✅ Login Function
  const useLogin = (userName, userEmail, password) => {
    const userFind = users.find(
      (user) => user.username === userName && user.password === password && user.email === userEmail
    );

    if (userFind) {
      alert(`✅ Login Successful! You are a ${userFind.role}`);
      localStorage.setItem("currentUser", JSON.stringify(userFind)); // ✅ Save current user

      if (userFind.role === "admin") {
        navigateLoginHandlePage("/admindashboard");
      };
    } else {
      alert("❌ User Not Found! Registering now...");

      const newUser = { username: userName, password, email: userEmail, role: "user" };
      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        
        navigateLoginHandlePage("/signup");
        return updatedUsers;
      });
    }
  };

  return { useLogin, users, makeAdmin, removeUser };
}

export default LoginHandle;
