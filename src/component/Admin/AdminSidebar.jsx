import React, { useState, useEffect } from "react";
import "./AdminSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);  // ✅ Best Practice for state update
  };


  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>✖</button>
        <ul>
          <li><Link to="/manage-users">Dashboard</Link></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar;
