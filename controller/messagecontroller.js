import Message from "../models/message.js";


export const sendMessage = async(req, res)=>{
 try {
    const {sender, recipient, content} = req.body;

    const message = await Message.create({
        sender, recipient, content
         

    })
    if (message) {
        res.status(200).json({
            sender: message.sender,
            recipient: message.recipient,
            content:message.content,
        });

        
    }

    
    
 } catch (error) {
    console.log(error);
    console.error('Error sending message', error)
    res.status(500).json({error: 'failed to send message.'})
    
 }
    

}