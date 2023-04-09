const mongoose=require("mongoose");

const outSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    roll: {
        type:String,
        required:true
    },
    hostel: {
        type:String,
        required:true
    },
    room: {
        type:Number,
        required:true
    },
    phone: {
        type:Number,
        required:true
    },
    departure: {
        type:Date,
        required:true
    },
    return: {
        type:Date,
        required:true
    },
    reason: {
        type:String,
        required:true
    },
})

const Outpass_data=new mongoose.model("Outpass_data", outSchema);

module.exports=Outpass_data;