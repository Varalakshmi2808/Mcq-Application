let mongoose=require('mongoose')
let qnsch=new mongoose.Schema({
    "qn":String,
    "opt1":String,
    "opt2":String,
    "opt3":String,
    "opt4":String,
    "ans":String,
    "level":String
})
let qm=new mongoose.model("qnsmodel",qnsch)
module.exports=qm