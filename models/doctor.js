import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId(),
        ref:'users'
    },
    name : {
        type : String,
        required : true

    },
    experience : {
        type : Number,
        required : true

    }, 
    specialist : {
        type : String,
        required : true

    },
    image : {
        type : String,
        required : true

    },
})

const Doctors = mongoose.model('doctors', doctorSchema)

export default Doctors;