import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const signupUsers = (userPassword,userEmail) => {  // ✅ Order fixed
    const users = JSON.parse(localStorage.getItem("users")) || [];  // ✅ Latest users list


    const userFind = users.find(
      (user) =>
        user.email.toLowerCase().trim() === userEmail.toLowerCase().trim() &&
        user.password.trim() === userPassword.trim()
    );

    console.log("User Found:", userFind);

    if (userFind) {
      alert(`✅ Login Successful! You are a ${userFind.role}`);

      if (userFind.role === "admin") {
        navigate("/admindashboard");
      } else {
        navigate("/");
      }
    } else {
      alert("You are not registered. Please register first.");
      navigate("/register");  // ✅ Fix: "/Login" ki jagah "/register"
    }
  };

  return { users, signupUsers };
}

export default useSignup;
