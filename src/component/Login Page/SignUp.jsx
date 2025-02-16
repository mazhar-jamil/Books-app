import React, { useState } from 'react';
import { Link , useLocation,useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import UseCustomHook from './UseCustomHook'
import './SignUp.css'

function SignUp() {

  const location = useLocation();
  const navigate = useNavigate();
  // ✅ Custom hook ko function ki tarah call karo (Component ki tarah nahi)
  const { signupUsers } = UseCustomHook();

    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signupUsers(password,userEmail)
    // console.log("Final Users List:", users);
  };

  return (
    <>
      <div id='Login-peg'>
        <div className="container flex justify-items-center">
          <div className="row max-w-md m-auto rounded-2xl text-black" id='Login-row'>
            <div className="col text-center">
              <button className='flex justify-self-end mt-1 ml-2 text-2xl' id='close-icon' onClick={() => navigate("/")}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <h1 className='text-center fw-bolder'>Login</h1>

              <Link to="/Login">
                <button className={`btn rounded-start-2 text-white px-4 py-2 mt-3 fw-bold ${location.pathname === "/Login" ? "active" : ""}`} id="login-sm">
                  LogIn
                </button>
              </Link>

              <Link to="/signup">
                <button className={`btn text-white px-4 py-2 mt-3 fw-bold ${location.pathname === "/signup" ? "active" : ""}`} id="signup-sm">
                  Signup
                </button>
              </Link>
              
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row max-w-md m-auto">
                <div className="col gap-y-3 pt-3">
                  <div className="form-group mx-3 pt-2 fw-bold">
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                     className='form-control bg-transparent border-black text-white fw-bold' 
                     style={{ position: "relative", width: "362px" }} required placeholder='password'
                     
                     />
                      <FontAwesomeIcon 
                        icon={faUser} 
                        style={{ 
                          position: "absolute", 
                          right: "12%", 
                          top: "48%", 
                          transform: "translateY(-50%)", 
                          color: "white" ,
                          fontSize: "20px"
                        }} 
                      />
                  </div>


                  <div className="form-group mx-3 pt-2 fw-bold">
                    <label>Email</label>
                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                     className={`form-control bg-transparent border-black text-white fw-bold`} style={{ position: "relative", width: "362px" }} required placeholder='email' />
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      style={{ 
                        position: "absolute", 
                        right: "12%", 
                        top: "63%", 
                        transform: "translateY(-50%)", 
                        color: "white" ,
                        fontSize: "20px"
                      }} 
                    />
                  </div>

                  <a href="#" className='mx-3 text-decoration-none text-white'>Forget Password?</a>

                  <div className="submit pt-3 mx-3">
                    <button type="submit" className='btn w-100 text-white fw-bold' id='Login-lg'>Login</button>
                  </div>

                  <div className='pt-4 text-center'>
                    <p className='inline-flex fw-bold'>Don't have an account?</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp