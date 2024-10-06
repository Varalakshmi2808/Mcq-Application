let mongoose=require('mongoose')
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "place":String,
    "dept":String,
    "maxsc":{
        type:Number,
        default:0
    },
    "attempts":{
        type:Number,
        default:0
    }
})
let um=new mongoose.model("usermodel",usersch)
module.exports=um