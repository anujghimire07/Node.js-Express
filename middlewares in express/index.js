const express = require("express")

const app = express()

app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=>{
    req.anuz="my name is anuz"
    console.log("hello from middleware 1")
    res.send("respose from middleware 1")
    next()
})

app.use((req, res, next)=>{
    console.log("hello from middleware 2 "+ req.anuz)
    res.send("respose from middleware 2")
    next()
})

app.listen(8000, ()=>console.log("server started successfully"))