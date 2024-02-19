import  express, { urlencoded }  from "express";
import {config} from 'dotenv'
import { ErrorMiddeleware } from "./Middelware/Error.js";
import cookieParser from 'cookie-parser'
config({
    path:"./config/config.env"
})
const app = express()

// using middelware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

// importing Routes 
import course from './Routes/CourseRoutes.js'
import user from './Routes/UserRoute.js'
import payment from './Routes/paymentRoutes.js'
import other from './Routes/OtherRoute.js'
app.use("/api/v1",course)
app.use("/api/v2",user)
app.use('/api/v3',payment)
app.use('/api/v4',other)
app.get('/',(req,res)=>{
    res.send("working")
})

export default app

app.use(ErrorMiddeleware)