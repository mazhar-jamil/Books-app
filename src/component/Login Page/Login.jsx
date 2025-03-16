// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

// import LoginHandle from './LoginHandle';

// function Login() {
//   const navigate = useNavigate();
//   const { useLogin } = LoginHandle(navigate);

//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [match, setMatch] = useState(null);

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setMatch(false);
//       alert("Passwords do not match!");
//       return;
//     }

//     setMatch(true);

//     // Call login function from hook
//     useLogin(userName, userEmail, password);
//     // console.log("Final Users List:", users);
//   };

//   return (
//     <>
//       <div id='Login-peg'>
//         <div className="container flex justify-items-center">
//           <div className="row max-w-md m-auto rounded-2xl text-black" id='Login-row'>
//             <div className="col text-center">
//               <button className='flex justify-self-end mt-1 ml-2 text-2xl' id='close-icon' onClick={() => navigate("/")}>
//                 <i className="fa fa-times" aria-hidden="true"></i>
//               </button>
//               <h1 className='text-center fw-bolder'>Register</h1>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="row max-w-md m-auto">
//                 <div className="col gap-y-3 pt-3">

//                 <div className="form-group mx-3 fw-bold" style={{ position: "relative", width: "362px" }}>
//                     <label>Name</label>
//                     <input 
//                       type="text"
//                       value={userName}
//                       onChange={(e) => setUserName(e.target.value)} 
//                       className="form-control bg-transparent border-black text-white fw-bold"
//                       required 
//                       placeholder="Name" 
//                       style={{ paddingRight: "30px" }} // Right side space for the icon
//                     />
//                     <FontAwesomeIcon 
//                       icon={faUser} 
//                       style={{ 
//                         position: "absolute", 
//                         right: "10px", 
//                         top: "70%", 
//                         transform: "translateY(-50%)", 
//                         color: "white" ,
//                         fontSize: "20px"
//                       }} 
//                     />
//                   </div>

//                   <div className="form-group mx-3 pt-2 fw-bold" style={{position: "relative", width: "362px"}}>
//                     <label>Email</label>
//                     <input 
//                     type='email'
//                     value={userEmail}
//                     onChange={(e) => setUserEmail(e.target.value)}
//                      className='form-control bg-transparent border-black text-white fw-bold' required placeholder='email' />
//                     <FontAwesomeIcon 
//                       icon={faEnvelope} 
//                       style={{ 
//                         position: "absolute",
//                         right: "10px",
//                         top: "52",
//                         transform: "translateY(-50%)", 
//                         color: "white" ,
//                         fontSize: "25px"
//                       }} 
//                     />
//                   </div>


//                   <div className="form-group mx-3 pt-2 fw-bold">
//                     <label>Password</label>
//                     <input type="password" value={password} onChange={handlePasswordChange}
//                       className={`form-control bg-transparent border-black text-white fw-bold ${match === false ? "border-red-700" : match === true ? "border-green-500" : ""}`} required placeholder='password' />
//                   </div>


//                   <div className="form-group pt-2 mx-3 fw-bold">
//                     <label>Confirm Password</label>
//                     <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange}
//                       className='form-control bg-transparent border-black text-white fw-bold' required placeholder='confirm password' />
//                     <small className='form-text text-muted fw-none'>
//                       Your password should be 4-10 characters.
//                     </small>
//                   </div>

//                   {match === false && <p className="text-red-500">Passwords do not match</p>}

//                   <a href="#" className='mx-3 text-decoration-none text-white'>Forget Password?</a>

//                   <div className="submit pt-3 mx-3">
//                     <button type="submit" className='btn w-100 text-white fw-bold' id='Login-lg'>Login</button>
//                   </div>

//                   <div className='pt-4 text-center'>
//                     <p className='inline-flex fw-bold'>Don't have an account?</p>
//                     <Link to="/signup" className='text-white fw-none ml-3'>Register</Link>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login;











import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import LoginHandle from './LoginHandle';

function Login() {
  const navigate = useNavigate();
  const { useLogin } = LoginHandle(navigate);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [match, setMatch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMatch(false);
      alert("Passwords do not match!");
      return;
    }
    setMatch(true);
    useLogin(userName, userEmail, password);
  };

  return (
    <div id='Login-peg' className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row row-Login-Page justify-content-center">
          <div className="col-12 col-md-8 col-lg-6" id='Login-row'>
            <button 
              className="flex justify-self-end text-2xl"
              id="close-icon" 
              onClick={() => navigate("/")}
            >
              <i className="fa fa-times"></i>
            </button>

            <h1 className='text-center fw-bold'>Register</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3 position-relative">
                <label>Name</label>
                <input 
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)} 
                  className="form-control bg-transparent border-black text-white fw-bold"
                  required placeholder="Name"
                />
              </div>

              <div className="form-group mt-3 position-relative">
                <label>Email</label>
                <input 
                  type='email'
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className='form-control bg-transparent border-black text-white fw-bold' required placeholder='Email'
                />
              </div>

              <div className="form-group mt-3">
                <label>Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control bg-transparent border-black text-white fw-bold"
                  required placeholder='Password' 
                />
              </div>

              <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input 
                  type="password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control bg-transparent border-black text-white fw-bold"
                  required placeholder='Confirm Password'
                />
                <small className='form-text text-muted'>Your password should be 4-10 characters.</small>
              </div>

              {match === false && <p className="text-danger">Passwords do not match</p>}

              <div className="text-center mt-4">
                <button type="submit" className="btn bg-black text-white fw-bold w-100">Register</button>
              </div>

              <div className='text-center mt-3'>
                <p className='d-inline-block fw-bold'>Already have an account?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
