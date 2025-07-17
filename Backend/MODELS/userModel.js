const mongoose=require('mongoose')


// create a schema like how the data will be saved in db
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     password:{
        type:String,
        required:true,
    
    },
     role:{
        type:String,
        enum:['owner' ,"user"],
        default:'user'
    },
    image:{
        type:String,
        default:""
    }
},
// timestamp when user/owner  is created
{
    timestamps:true
})


//  create a constructor through which we can make different users
const User=mongoose.model('User',userSchema)


module.exports=User