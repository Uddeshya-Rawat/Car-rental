const express=require("express")
const {  login, register } = require("../CONTROLLERS/userController")

const UserRouter=express.Router()

UserRouter.post('/register',register)

UserRouter.post('/login',login)

UserRouter.get('/userData')


module.exports=UserRouter