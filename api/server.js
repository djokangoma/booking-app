const express = require( "express");
const app = express();
const dotenv =require("dotenv");
dotenv.config()

app.listen(8800, ()=>{
    console.log("connect to backend!!")
})