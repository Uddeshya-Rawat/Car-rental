const express = require('express')
const cors=require('cors')

const dbConnection=require('./config/db.js');
const { registerUser } = require('./CONTROLLERS/userController.js');

const UserRouter = require('./ROUTES/userRoutes.js');




// Initialize express app
const app=express();


// connect to db
dbConnection()


// ...................................Middleware.....................................
// use for accessing from an link
app.use(cors())

// convert response data into json
app.use(express.json())

app.use('/api/user',UserRouter)


//............................ route ..........................
// route
app.get('/',(req,res)=>{
    res.json({
        server:"running"
    })
})







//..........................run server...................................
const PORT= process.envPORT || 3000;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT} http://localhost:3000/`)
})