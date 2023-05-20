import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true

    }, email : {
        type : String,
        required : true

    }, password : {
        type : String,
        required : true

    }, phone : {
        type : Number,
        required : true

    }, address : {
        type : String,
        required : true

    },
    isAdmin : {
        type : Boolean,
        required : true,
        default: false

    },
    isDoctor : {
        type : Boolean,
        required : true,
        default: false

    },
    

})

const Users = mongoose.model('users', UserSchema)

export default Users;