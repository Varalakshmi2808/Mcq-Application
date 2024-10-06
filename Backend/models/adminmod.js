let mongoose=require('mongoose')
let adminsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "place":String,
    "dept":String
})
let am=new mongoose.model("adminmodel",adminsch)
module.exports=am