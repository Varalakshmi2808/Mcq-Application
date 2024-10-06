import React from 'react'
import { Link } from 'react-router-dom'

const Reg = () => {
  return (
    <div className='logincon'>
        <div className='login'>
        <div style={{color:"rgba(209, 193, 209, 0.861)"}}>Admin</div>
        <div className='pf'><i class="fa-solid fa-user"></i></div>
          <div className='log'> <Link to="/adminlogin">Login</Link>
            <Link to="/adminreg">Register</Link>
            </div>
        </div>
        <div className='login'>
        <div style={{color:"rgba(209, 193, 209, 0.861)"}}>Student</div>
        <div className='pf'><i class="fa-solid fa-user"></i></div>
        <div className='log'>
        <Link to="/userlogin">Login</Link>
        <Link to="/userreg">Register</Link>
        </div>
        </div>
    </div>
  )
}

export default Reg