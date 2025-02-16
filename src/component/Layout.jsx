import React from 'react'
import { Link , Outlet,useNavigate } from 'react-router-dom';

function Layout() {

  const navigate = useNavigate()

  return (
    <>
    <div id="header">
      <div className="container-fluid">
        <div className="row bg-blue-900 md">

        <div className="col-lg-5 pt-2.5 text-lg-start text-center">
           <h1 id="loggo" className="fw-bolder text-white p-2">Islamic Books World</h1>
         </div>
         
         <div className="col-lg-4 offset-lg-1 col-md-6 offset-md-2 col-sm-7 offset-sm-2 col-6 offset-2 px-3 mt-4 d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center">
         <ul id="menu" className="d-flex justify-content-end align-items-center text-white rounded-lg">
          <li className='home-Home-Link'><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className='mr-md-10 mr-lg-4 content-Home-Link'><Link to="/content">Content</Link></li>
        </ul>
      </div>

        <div className="col-lg-1 offset-lg-1 col-md-2 offset-md-2 ms-md-5 col-sm-2 offset-sm-1 col-3 offset-1 my-auto d-flex justify-content-lg-start justify-content-md-end justify-content-sm-center justify-content-center" id='login-btn'>
          <button className='btn px-4' id='login' onClick={() => navigate("/Login")}>LogIn</button>
        </div>

        </div>
      </div>
    </div>     

    <div>
      <Outlet />
    </div>

    <div id="footer" style={{backgroundColor: "#2c3e50"}}>
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-xl-start text-lg-start text-sm-center text-center fs-4 my-auto text-white">
            <p>@ending in company website</p>
          </div>


            <div className="col-lg-6 col-md-6  col-sm-12 col-12 my-lg-auto my-md-auto">
              <div id="social-icon" className="float-lg-end float-md-end text-sm-center text-center mt-sm-0 pt-sm-0 pb-sm-2">
                <ul className="list-unstyled text-xl d-inline ">
                  <li className="d-inline me-3 transition-all duration-300 transform hover:scale-110 hover:text-blue-500 hover:opacity-80 "><a href="" className='text-white'><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                  <li className="d-inline me-3 transition-all duration-300 transform hover:scale-110 hover:text-blue-500 hover:opacity-80 hover:shadow-lg"><a href="" className='text-white'><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                  <li className="d-inline me-3 transition-all duration-300 transform hover:scale-110 hover:text-blue-500 hover:opacity-80 hover:shadow-lg"><a href="" className='text-white'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</>
  )
}

export default Layout;