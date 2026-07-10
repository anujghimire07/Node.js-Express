const express = require("express")

const myapp = express()

myapp.get("/", (req, res) => {
    return res.send("home page my nigga")
})

myapp.get("/about", (req, res) => {
    return res.send("about page (GET)\n" + "your name is: " + req.query.my_name + "\n" + "your id is: " + "\n" + req.query.my_id)
})

myapp.post("/about", (req, res) => {
    return res.send("about page (POST)")
})

myapp.listen(8002, () => console.log("Server started successfully"))


