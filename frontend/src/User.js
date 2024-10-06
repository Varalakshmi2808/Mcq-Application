import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import {useNavigate } from 'react-router-dom'

const User = () => {
    let [data,setData]=useState({})
    let navigate=useNavigate()
    let obj=JSON.parse(Cookies.get("obj"))
    useEffect(()=>{
        let id=obj._id
        console.log(id)
        axios.get(`http://localhost:5000/userdet/${id}`).then((res)=>{
            setData(res.data)
            console.log(res.data._id)
            console.log("asdfd")
        })
    },[])

    let start=()=>{
        navigate("/ques")
    }
  return (
    <div className='main'>
      <h1 style={{"color":"rgb(128, 12, 86)",textAlign:"center",paddingTop:"30px"}}>Student Details</h1>
    <div className='usercon'>
      
    <p ><span>UserId :</span>{data._id}</p>
    <p><span>Name :</span>{data.name}</p>
   <p> <span>Maximum Score :</span>{data.maxsc}</p>
    <p><span>No of attempts :</span>{data.attempts}</p>
    <button onClick={start}>Start exam</button>
    </div>
    </div>
  )
}

export default User