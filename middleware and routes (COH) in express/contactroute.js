const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("this is contact page")
})

router.get("/:id", (req, res)=>{
    res.send("this is dynamic parameter (contact page)")
})

module.exports= router