import React from "react";
import BillGates from'../../assets/Images/bill Gates.jpeg'
import Moush from '../../assets/Images/moush.jpg'
import AdminSidebar from "./AdminSidebar";
import './AdminDashboard.css'

function AdminDashboard() {

  return (
    <>
     <div>
      <AdminSidebar /> {/* Sidebar Component Included */}
      <div id="bannerTable-AdminPage">
        <h2 className="admin-Header">Welcome, Admin! Manage Your Website Here</h2>
        <div className="container-fluid">
          <div className="col-6">
            <div className="text-center my-auto">
              <h1 className="display-4 fw-bold mt-5">Admin Dashboard</h1>
              <p className="lead text-black">Welcome, Admin! You have full access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  <div id="testimonials" className="section ">
   <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="section-head text-white text-center mb-5">Admins</h1>
      </div>
      <div className="col-sm-6 p-3 col-12">
        <div className="testimonials">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti delectus, cum amet itaque voluptas numquam a. Fuga, incidunt debitis!</p>
          <img src={BillGates} alt="" />
          <div className="komatu"><p>Azhar Qureshi Admin</p></div>
        </div>
      </div>
      <div className="col-sm-6 p-3 col-12">
        <div className="testimonials">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti delectus, cum amet itaque voluptas numquam a. Fuga, incidunt debitis!</p>
          <img src={Moush} alt="" />
          <div className="moush"><p>Malik Gulraiz Admin</p></div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default AdminDashboard;
