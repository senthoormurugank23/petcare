const mongoose=require('mongoose')
const VeterinarySchema=new mongoose.Schema({
    username:String,
    email:String,
    phone_number:Number,
    password:String,
})
const VeterinaryModel=mongoose.model("Users",VeterinarySchema)
module.exports=VeterinaryModel



