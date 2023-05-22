import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
        
    },
    recipient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',
        required:true,

    },
    content:{
        type:String,
        required:true,

    },
    time:{
        type:Date,
        default: Date.now,

    }

    
});


const Message = mongoose.model('message', messageSchema);

export default Message;
