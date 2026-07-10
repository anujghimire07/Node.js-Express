const express = require("express")
const app = express()
const aboutroute = require("./aboutroute")
const contactroute= require("./contactroute")

//application level middle ware
app.use((req, res, next)=>{
    console.log("first middleware")
    // req.anuz= "anuz ghimire"
    next()
})
app.use((req, res, next)=>{
    console.log("second middleware")
    next()
})

//routes
app.get("/", mid)
function mid(req, res){
    res.send("home page" /*+ req.anuz*/)
}
app.get("/user", (req, res)=>{
    res.send("user page");
})

// route using Router middleware
app.use("/about", aboutroute)
app.use("/contact", contactroute)

app.listen(8000, ()=>console.log("server started successfully"))