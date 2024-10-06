import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const Ques = () => {
    let [qns,setqns]=useState([])
    let [ans,setAns]=useState({})
    let [f,setF]=useState(false)
    let [sc,setSc]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost:5000/getqns").then((res)=>{
            setqns(res.data)
            console.log(res.data)
        })
    },[])
    let fun=(e)=>{
        setAns({...ans,[e.target.name]:e.target.value})

}  
let sub=()=>{
    let sc=0
    for(let i=0;i<qns.length;i++){
        if(qns[i].ans==ans[qns[i]._id]){
            sc+=1
        }
    }
    console.log(sc)
    let obj=JSON.parse(Cookies.get("obj"))
    console.log(obj)
    axios.put("http://localhost:5000/updmarks",{"_id":obj._id,"maxsc":obj.maxsc>sc?obj.maxsc:sc,"attempts":obj.attempts+1}).then((res)=>{
        console.log(res.data)
        setF(!f)
        setSc(sc)
    })


}
  return (
    <div className="qmain">
        {f&&<h2 style={{textAlign:"center"}}>Score:{sc}</h2>}
        {!f?<h2 style={{textAlign:"center"}}>Answer all the questions</h2>:<h3 style={{color:"green",textAlign:"center"}}>Thank you for taking exam, your exam is submitted succesfully</h3>}
       {
        
        qns.map((item,ind)=>{
            return(<>
            
                {!f?<div className='question'>
                <div className='qn'><h4>{ind+1}.{item.qn}</h4><i style={{color:"black"}}>1 marks</i></div>
                <div><input type='radio' name={item._id} onChange={fun} value="opt1" />{item.opt1}</div>
               <div><input type='radio' name={item._id} onChange={fun} value="opt2" />{item.opt2}</div>
               <div><input type='radio' name={item._id} onChange={fun} value="opt3" />{item.opt3}</div>
               <div><input type='radio' name={item._id} onChange={fun} value="opt4" />{item.opt4}</div>
                </div>:
                
                <div className='question'>
                <div className='qn'><h4>{ind+1}.{item.qn}</h4></div>
                <div><input type='radio' name={item._id} onChange={fun}  disabled checked={"opt1"==ans[item._id]}/>{item.opt1}<>{item.ans=="opt1"?<i class="fa-solid fa-check r"></i>:ans[item._id]=="opt1"?<i class="fa-solid fa-xmark x"></i>:<i></i>}</></div>
               <div><input type='radio' name={item._id} onChange={fun}  disabled checked={"opt2"==ans[item._id]}/>{item.opt2}<>{item.ans=="opt2"?<i class="fa-solid fa-check r"></i>:ans[item._id]=="opt2"?<i class="fa-solid fa-xmark x"></i>:<i></i>}</></div>
               <div><input type='radio' name={item._id} onChange={fun}  disabled checked={"opt3"==ans[item._id]}/>{item.opt3}<>{item.ans=="opt3"?<i class="fa-solid fa-check r"></i>:ans[item._id]=="opt3"?<i class="fa-solid fa-xmark x"></i>:<i></i>}</></div>
               <div><input type='radio' name={item._id} onChange={fun}  disabled checked={"opt4"==ans[item._id]}/>{item.opt4}<>{item.ans=="opt4"?<i class="fa-solid fa-check r"></i>:ans[item._id]=="opt4"?<i class="fa-solid fa-xmark x"></i>:<i></i>}</></div>
                </div>
                }
                </>
            )
        })
       }
       {!f?<button onClick={sub} style={{marginLeft:"35%",width:"20%",height:"40px"}}>Submit</button>:<Link to="/user">Go to profile</Link>}
    </div>
  )
}

export default Ques