import mongoose from "mongoose";
import bcrypt from "bcrypt";


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
    userType : {
        type : String,
        enum : ['user', 'doctor', 'isAdmin'],

        required : true,
        default : 'user',
       

    },
    

});

const Users = mongoose.model('users', UserSchema)

export default Users;