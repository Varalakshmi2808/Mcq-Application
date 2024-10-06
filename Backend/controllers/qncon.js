let qm=require("../models/qnsmod")

let qns=async(req,res)=>{
    try {
        let data=new qm(req.body)
        await data.save()
        res.json({"msg":"Qusetion Added Successfully"})
    } catch (error) {
        console.log(error)
    }
}

let getqns=async(req,res)=>{
    try {
        let easy=await qm.find({"level":"easy"})
        let med=await qm.find({"level":"medium"})
        let hard=await qm.find({"level":"hard"})
        res.json([...easy.slice(0,1),...med,...hard])
    
    } catch (error) {
        
    }
}
module.exports={qns,getqns}