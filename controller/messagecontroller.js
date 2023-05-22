import Message from "../models/message.js";


export const sendMessage = async(req, res)=>{
 try {
    const {senderId, recipientId, content} = req.body;

    const message = Message({
        sender: senderId,
        recipient: recipientId,
        content: content,
    });

    await message.save()
    res.status(200).json({message: 'message send successfully.'})
    
 } catch (error) {
    console.error('Error sending message', error)
    res.status(500).json({error: 'failed to send message.'})
    
 }
    

}