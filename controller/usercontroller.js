import Users from "../models/usermodel.js"
import generaltoen from "../utils/genetaltoken.js"

export const register = async(req, res)=>{
   try {
    const {name, email,password, address, phone} = req.body
    const userExists = await Users.findOne({email})
    
    if (userExists) {
        res.status(400).json({message : "User already exists"})
        
    }else{
        const user= await Users.create({
            name, email, password, address, phone,
        })
       

        if (user) {
            res.status(201).json({
                name: user.name,
                email: user.email,
                password: user.password,
                address: user.address,
                phone: user.phone,
                token:generaltoen(user._id)
            })

            
        } }
    
   } catch (error) {
    res.status(401).json({message : error.message})
    
    
   }
    }



export const login = async (req, res)=>{
  try {
    const {email , password} =  req.body;

    const user = await Users.findOne({email})
    if (email && password == user.password) {
        res.status(200).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone,
           
            token:generaltoen(user._id)
            
        })

        
    } else {
        res.status(404).json({message : "Invalid Email or Password"})
        
    }
    
  } catch (error) {
    res.status(401).json({error : error})
    
  }
}

export const getUserProfile = async (req, res) =>{
    
  try {
    
    const { token, id } = req.body;
    const user = await Users.findById(id);

    if (user) {
        res.status(200).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone,
            userType: user.userType,
            token

        })
        
    } else {
        res.status(404).json({message : "user not found"})
        
    }
  } catch (error) {
    res.status(401).json({message : error})
    
  }
}

export const getAllUsers = async(req,res)=>{
 try {
  const user = await Users.find()
  res.json(user)

 } catch (error) {
  console.error('Error getting users:', error);

  
 }
}

export const update = async(req, res)=>{
try {
  const {name,email,password,address,phone,userType} = req.body;
  const user = await Users.findById(req.params.id)
 if (user) {
  user.name = name,
  user.email = email,
  user.password = password,
  user.address = address,
  user.phone = phone,
  user.userType = userType

  
  const updateduser= await user.save()
  if (updateduser) {
   res.status(201).json(updateduser)
   
  }
  
 } else {
  res.status(404).json({Message: "user not found"})
  
 }
} catch (error) {
  res.status(500).json({error: error.message})
}

  
}

