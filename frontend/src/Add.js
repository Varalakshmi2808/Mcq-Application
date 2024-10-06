import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
    let [data,setData]=useState({"qn":"","opt1":"","opt2":"","opt3":"","opt4":"","ans":"","level":""})
    let [msg,setmsg]=useState("")
  let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        axios.post("http://localhost:5000/addqsn",data).then((res)=>{
          setmsg(res.data.msg)
          setData({"qn":"","opt1":"","opt2":"","opt3":"","opt4":"","ans":"","level":""})
        })
        setmsg("")
    }
  return (
    <div className='logincon'>
        <div className='qsncon'>
        <div className='head'>Add questions of level hard ,medium and easy</div>
        {msg!=""&&<div style={{color:"green",fontSize:"20px"}}>{msg}</div>}
        <label>Question:</label>
        <input type='text' placeholder='Enter question' name="qn" onChange={fun} value={data.qn}/>
        <label>Option1</label><input type='text' placeholder='option 1' name="opt1" onChange={fun} value={data.opt1}/>
        <label>Option2</label><input type='text' placeholder='option 2' name="opt2" onChange={fun} value={data.opt2}/>
        <label>Option3</label><input type='text' placeholder='option 3' name="opt3" onChange={fun} value={data.opt3}/>
        <label>Option4</label><input type='text' placeholder='option 4' name="opt4" onChange={fun}value={data.opt4} />
        <label>Answer</label><input type='text' placeholder='Answer' name="ans" onChange={fun} value={data.ans}/>
        <select name="level" onChange={fun} value={data.level}>
        <option selected disabled>Select level of qsn</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
        </select>
        <button onClick={add}>Add Question</button>
        </div>
    </div>
  )
}

export default Add