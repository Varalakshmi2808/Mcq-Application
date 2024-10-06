let am=require("../models/adminmod")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let Areg=async(req,res)=>{
    try {
        let result=await am.findById({"_id":req.body._id})
        if(result){
            res.json({"msg":"email already exist"})
        }
        else{
            let data=new am(req.body)
        await data.save()
        res.json({"msg":"Registered Sucessfully"})
        }
    } catch (error) {
        console.log(err)
    }
}

let adminlog=async(req,res)=>{
    try {
        let data=await am.findById({"_id":req.body._id,"pwd":req.body.pwd})
        if(data){
            res.json({"token":jwt.sign({"_id":req.body._id},'vara'),"name":data.name})
        }
        else{
            res.json({"msg":"user not exist"})
        }
    } catch (error) {
        
    }
}

let qns=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
module.exports={Areg,adminlog}