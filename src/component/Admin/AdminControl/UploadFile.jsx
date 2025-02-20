import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import DefultUpload from "../../../assets/Images/Book.JPG";
import "./UploadFile.css";

function UploadFile({handleImageUpload,images}) {

  return (
    <>
      <div className="uploadFile-container">
        <div>
          <AdminSidebar /> {/* Sidebar Component Included */}
          <h2 className="admin-Header">Welcome, Admin! Manage Your Website Here</h2>
        </div>
        <div className="uploadFile-body">
          <div className="uploadFile-Header">
            <h2>Upload Image - Panel</h2>
          </div>
        </div>
        <div className="card-upload">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mt-5 pt-0 d-flex justify-content-center">
            <div className="card responsive-Home-card">
              <img
                src={images > 0 ? images : DefultUpload}
                className="card-img-top home-Responsive-CardImg transition-all duration-500 transform hover:scale-105"
                style={{ width: "100%", height: "230px", objectFit: "cover" }}
                alt="Uploaded Preview"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Uploaded Image</h5>
                <p className="card-text">
                  Upload an image, and it will be displayed here.
                </p>
                <label htmlFor="fileInput1" className="btn btn-primary">
                  Upload File
                </label>
                <input
                  id="fileInput1"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleImageUpload} // Image Upload Function
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadFile;