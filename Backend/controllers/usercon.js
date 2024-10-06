let um=require("../models/usermod")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let ureg=async(req,res)=>{
    try {
        let result=await um.findById({"_id":req.body._id})
        if(result){
            res.json({"msg":"email already exist"})
        }
        else{
            let data=new um(req.body)
        await data.save()
        res.json({"msg":"registered sucessfully"})
        }
    } catch (error) {
        console.log(err)
    }
}

let userlog=async(req,res)=>{
    try {
        let data=await um.findById({"_id":req.body._id,"pwd":req.body.pwd})
        if(data){
            res.json({"token":jwt.sign({"_id":req.body._id},'vara'),"name":data.name,"_id":data._id,"maxsc":data.maxsc,"attempts":data.attempts})
        }
        else{
            res.json({"msg":"User not exist"})
        }
    } catch (error) {
        
    }
}

let userdet=async(req,res)=>{
    try {   
        let data=await um.findById({"_id":req.params.id})
        console.log(data)
        res.json(data)
    } catch (error) {
        
    }
}

let updmarks=async(req,res)=>{
    try {
        await um.findByIdAndUpdate({"_id":req.body._id},req.body)
        console.log("sdda")
        res.json("upd done")
    } catch (error) {
        console.log(error)
    }
}
module.exports={ureg,userlog,userdet,updmarks}
