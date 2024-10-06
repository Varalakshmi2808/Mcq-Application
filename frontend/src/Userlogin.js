import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

const Userlogin = () => {
  let [data,setData]=useState({})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let login=()=>{
      axios.post("http://localhost:5000/userlogin",data).then((res)=>{
        console.log(res.data)
        if(res.data.token!=undefined){
          Cookies.set("obj",JSON.stringify(res.data))
        navigate("/user")
        }
        else{
          setMsg(res.data.msg)
        }
      })
    }
  return (
    <div className='logincon'>
      <div className='login'>
        <div>{msg}</div>
      <div>Login</div>
        <input type="text" placeholder='Enter mail'  onChange={fun} name="_id"/>
        <input type="password" placeholder='Enter password' onChange={fun} name="pwd"/>
        <button onClick={login}>login</button>
    </div>
    </div>
  )
}

export default Userlogin