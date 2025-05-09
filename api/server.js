const express = require("express");
const authroute = require("./routes/auth");
const mongoose = require("mongoose");
const dontev = require("dotenv"); 

dontev.config()

const app = express();

const  connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connect to mongo db");
        
    } catch(error) {
        throw error
    }
}

    mongoose.connection.on("connected",()=>
    console.log("mongo db connected")
    )

    app.use("/api/auth", authroute)

app.listen(8800,()=>{
    connect()
    console.log("connect to backend ")
})