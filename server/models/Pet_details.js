const mongoose=require('mongoose')

const PetSchema=new mongoose.Schema({
    username:String,
    pet_name:String,
    pet_type:String,
    Breed:String,
    pet_gender:String,
    pet_age:Number,
    from_date:Date,
    to_date:Date,
    No_of_days:Number,
    appointment_no:{
        type: Number,
        default: function () {
            let randomNum;
            do {
                randomNum = Math.floor(Math.random() * 99);
            } while (randomNum === 0);
            return randomNum;
        },
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: 'Appointment number should be greater than 0.'
        }
    },
    Meal:Number,Amount:Number,recipientEmail:String
})
const PetdetailsModel=mongoose.model("dog_boarding",PetSchema)
module.exports=PetdetailsModel
