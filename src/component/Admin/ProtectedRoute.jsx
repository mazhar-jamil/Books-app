import React from "react";  // ✅ Add this
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => { 
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || currentUser.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
