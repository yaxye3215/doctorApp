import mongoose from "mongoose";



const contectdb = ()=>{
    mongoose.connect(process.env.dblink).then(()=>{
        console.log('connect database')
    })
}

export default contectdb;