import React from 'react'
import LoginHandle from "../Login Page/LoginHandle"; //  Import LoginHandlez
import AdminSidebar from './AdminSidebar';
import './AdminDashboard.css'

function AdminManageUsers() {

  const { users, makeAdmin, removeUser } = LoginHandle();
  console.log(users)

  const handleMakeAdmin = (username) => {
    let confirmation = prompt(`Do you want to make ${username} an Admin? (yes/no)`);
    
    if (confirmation && confirmation.toLowerCase() === "yes") {
      makeAdmin(username);
      alert(`${username} is now an Admin!`);
    } else {
      alert(`Action canceled! ${username} is still a normal user.`);
    }
  };

  const handleRemoveUser = (currentUser) => {
    let confirmation = prompt(`Do you want to Remove on ${currentUser}? (yes/no)`);

    if (confirmation && confirmation.toLowerCase() === "yes") {
      removeUser(currentUser);
    } else {
      alert(`Action canceled! ${currentUser} is still a normal user.`);
    }
  }

 
  return (
    <>
    <div className='TableAdmin-user'>
    <div>
      <AdminSidebar /> {/* Sidebar Component Included */}
        <h2 className="admin-Header">Welcome, Admin! Manage Your Website Here</h2>
    </div>

    {/* /* ✅ Users Table */}
    <div className="admin-page">
  <div className="admin-table">
    <div className="table-responsive">
      <table className="table table-striped table-dark table-hover">
        <thead className="table-light">
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => handleMakeAdmin(user.username)}  style={{ minWidth: "100px" }}
                  className="btn btn-primary btn-sm"
                >
                  {user.role === "admin" ? "Make User" : "Make Admin"}
                </button>
              </td>
              <td>
                <button onClick={() => handleRemoveUser(user.username)}  className="btn btn-primary btn-sm">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>


    </>
  )
}

export default AdminManageUsers