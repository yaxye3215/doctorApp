import Doctors from "../models/doctor.js";

export const Create = async (req, res)=>{
  try {
    const {type,name,experience,specialist,image} = req.body;
    const doctor = await Doctors.create({
        name,experience,specialist,image
    });
    if (doctor) {
        res.status(201).json({
            type: doctor.type,
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
