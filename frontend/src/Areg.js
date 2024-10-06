import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Areg = () => {
  let [data,setData]=useState({"_id":"","name":"","pwd":"","place":"","dept":""})
  let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    let reg=()=>{
      axios.post("http://localhost:5000/adreg",data).then((res)=>{
        setData({"_id":"","name":"","pwd":"","place":"","dept":""})
        navigate("/")
      })
    }
  return (
    <div className='logincon'>
      <div className='login'>
      <div>Admin Registration</div>
        <input type="text" placeholder='Enter mail' onChange={fun} name="_id"/>
        <input type="text" placeholder='Enter name' onChange={fun} name="name"/>
        <input type="password" placeholder='Enter password' onChange={fun} name="pwd"/>
        <input type="text" placeholder='Enter place' onChange={fun} name="place"/>
        <input type="text" placeholder='Enter dept' onChange={fun} name="dept"/>
        <button onClick={reg}>Register</button>
    </div>
    </div>
  )
}

export default Areg