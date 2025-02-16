import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './component/Layout'
import Home from './component/Home'
import About from './component/About'
import Content from './component/Content'
import Login from './component/Login Page/Login'
import SignUp from './component/Login Page/SignUp'
import AdminDashboard from './component/Admin/AdminDashboard'
import ProtectedRoute from './component/Admin/ProtectedRoute'
import AdminManageUsers from './component/Admin/AdminManageUsers'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/content' element={<Content />} />
       </Route>

          <Route path='/Login' element={<Login />} /> 
          <Route path='/signup' element={<SignUp />} /> 
          
          <Route path='/admindashboard' element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path='/manage-users' element={
  <ProtectedRoute>
    <AdminManageUsers />
  </ProtectedRoute>
} />

      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
