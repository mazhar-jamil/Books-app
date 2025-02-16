import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const signupUsers = (userPassword, userEmail) => {
    const userFind = users.find(
      (user) => user.password === userPassword && user.email === userEmail
    );
        
    if (userFind) {
      navigate("/");
    }else{
      alert("You are Rong password")
    }
  };

  
  return { users, signupUsers };
}

export default useSignup;
