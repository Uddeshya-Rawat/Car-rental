const mongoose = require('mongoose')
require('dotenv').config()

// connect to db
const dbConnection= async ()=>{
     try{
        mongoose.connection.on('connected',()=> console.log("DB connected"))
       await  mongoose.connect(process.env.MONGO_URI)
      
     }catch(error){
     console.log(error)
     }
}

module.exports=dbConnection


