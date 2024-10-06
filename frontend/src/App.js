import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlogin from './Userlogin'
import Adminlogin from './Adminlogin'
import Ureg from './Ureg'
import Areg from './Areg'
import Reg from './Reg'
import "./App.css"
import Add from './Add'
import Res from './Res'
import Ques from './Ques'
import User from './User'
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Reg/>}/>
      <Route path="/userlogin" element={<Userlogin/>}/>
      <Route path="/adminlogin" element={<Adminlogin/>}/>
      <Route path="/userreg" element={<Ureg/>}/>
      <Route path="/adminreg" element={<Areg/>}/>
      <Route path="/addqn" element={<Add/>}/>
      <Route path="/result" element={<Res/>}/>
      <Route path="/ques" element={<Ques/>}/>
      <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App