import Doctors from "../models/doctor.js";

export const Create = async (req, res)=>{
  try {
    const {user,name,experience,specialist,image} = req.body;
    const doctor = await Doctors.create({
        user,name,experience,specialist,image
    });
    if (doctor) {
        res.status(201).json({
            user: doctor.user,
            name:doctor.name,
            experience:doctor.experience,
            specialist:doctor.specialist,
            image:doctor.images,
        })
        
    }
  } catch (error) {
    console.log(error);
    
  }
}

export const getdoctors = async (req, res)=>{
  try {
      const doctors = await Doctors.find()
  res.json(doctors)
      
  } catch (error) {
      res.status(500).json({error: error.Message})

      
  }
}
