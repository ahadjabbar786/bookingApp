// const exprress = require("express")//
import express from "express";
import dotenv from "dotenv";
import authRoute from "./api/routes/auth.js";
import roomsRoute from "./api/routes/rooms.js";
import usersRoute from "./api/routes//users.js";
import hotelsRoute from "./api/routes/hotels.js";
import cookieParser from "cookie-parser";
import cors from "cors";



import mongoose, {
    connect,
    isObjectIdOrHexString,
    Mongoose
} from "mongoose";
import { createError } from "./api/utils/error.js";
const app = express();
dotenv.config();
mongoose.set('strictQuery', false)  
app.use(cors())
app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

/*const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true
        });
        console.log("connected sucessfull")
    } catch (error) {
        throw error;
    }

}*/

/*mongoose.connect("disconnected",()=>{
console.log("mongoDB disconnected")
})
mongoose.connect("connected",()=>{
    console.log("mongoDB connected")
 })*/


const connectionParams = {
 useNewUrlParser: true,
    useUnifiedTopolgy: false,
   useCreateIndex: true

}
mongoose.connect(process.env.MONGO_DB
    
    )
    .then(() => {
        console.log("Connected to the DB");
    })
    .catch((e) => {
        console.log("Error:", e)
    })
    mongoose.connection.on("disconnected",()=>{
        console.log("mongoDB disconnected")
    })
    mongoose.connection.on("connected",()=>{
        console.log("mongoDB connected")
    })

    //middelware
app.use(cookieParser())
    app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
 app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
     success:false,
     status:errorStatus,
     message:errorMessage,
     stack:err.stack,
    });
    next()
});

app.listen(8000, () => {

    console.log(" connnected to backend")
})
