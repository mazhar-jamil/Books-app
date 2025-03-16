import React, { useState } from "react";
import { Link ,Outlet} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSearch } from "@fortawesome/free-solid-svg-icons";
import '../Layout.css'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aboutDropdown,setAboutDropdown] = useState(false)
  const arrowFarword = "<"
  const arrowDown = ""

  console.log(aboutDropdown)
  return (
    <>
    <div>
    <nav className="navbar">
      {/* ✅ Logo Left Side */}
      <h4 className="logo">Best Urdu Books</h4>

      {/* ✅ Right Section (Search + Menu + Links) */}
      <div className="right-section">
        {/* ✅ Search Bar */}
        <div className={`search-container ${searchOpen ? "active" : ""}`}>
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <input type="text" className="search-input" placeholder="Search..." />
        </div>

        {/* ✅ Menu Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* ✅ Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
              <button className="dropdown-btn">DARS E NIZAMI درس  نظامی</button>

              {/* ✅ Dropdown Menu */}
              <div className="dropDown-Menu">
                <ul>
                  <li className="dropdown">
                  <button className="dropdown-btn"><span>{arrowFarword}</span>About</button>

                    <div className="dropDown-Menu">
                      <ul>
                        <li>About</li>
                        <li>Contect Us</li>
                      </ul>
                    </div>
                  </li>
                  <li><Link to="/content">Content</Link></li>
                </ul>
              </div>
            </li>
          <li><Link to="/content">ARABIC BOOKS</Link></li>
        </ul>
      </div>
    </nav>
    </div>
     

 

    <div>
      <Outlet />
    </div>

    <div id="footer" style={{backgroundColor: "#6c4a28"}}>
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