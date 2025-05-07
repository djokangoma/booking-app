const express = require( "express");
const app = express();
const dotenv =require("dotenv");
const mongoose  = require("mongoose");
dotenv.config()


const  connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connect to mongo db");
        
    } catch(error) {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>
console.log("mongo db disconnected")
)
mongoose.connection.on("connected",()=>
console.log("mongo db connected")
)
app.get("/", (req,res)=>{
    res.send("i love u joe kangoma")
})


app.listen(8800, ()=>{
    connect()
    console.log("connect to backend!!")
}) 