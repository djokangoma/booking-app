const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("this is endpoint aut js")
})
router.get("/register", (req,res)=>{
    res.send("this is auth register endpont")
})


module.exports= router;