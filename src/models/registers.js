const mongoose= require("mongoose");

const empSchema = new mongoose.Schema({
    fullname: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phone: {
        type:Number,
        required:true,
        unique:true
    },
    gender: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        // required:true,
    },
    confirmpassword: {
        type:String,
        // required:true,
    }
})

const Register= new mongoose.model("Register", empSchema);

module.exports= Register;


