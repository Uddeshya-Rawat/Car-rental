const User = require("../MODELS/userModel")
const bcrypt = require('bcrypt')



// create user

const register = async (req, res) => {
    try {

        // destruture the body 
        const { name, email, password } = req.body

        // checks if all fields exists
        if (!name || !email || !password || password.length < 8) {
          return  res.json({
                sucess: false,
                message: 'Fill all details'
            })
        }

        // checks if user already exist
        const userExist = await User.findOne({ email })
        if (userExist) {
           return res.json({
                message: "User already Exist"
            })
        }


        // brypt the password 
        const hashPassword = await bcrypt.hash(password, 10)

        // create a user 
        const user = await User.create({
            name,
            email,
            password: hashPassword
        })

        // send response
        res.json({ sucess: true })


    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}






// sign in user

const login = async (req, res) => {
    try {
        const { email, password } = req.body


        //find user , if no  user found send res
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ sucess: false, message: "User not Found" })
        }

        // match password 
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.json({ success: false, messsage: "Wrong Password" })
        }

        res.json({success:true,message:"Login sucessfull" })

    } catch (error) {

    }
}


module.exports = { register , login }