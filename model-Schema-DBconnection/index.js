require("dotenv").config()
const express = require("express")
const connectDB = require("./db")
const User = require("./models/user")

const app = express()

connectDB()

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// GET - display all users
app.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.render("index", { users })
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// POST - add a new user
app.post("/add", async (req, res) => {
    try {
        await User.create(req.body)
        res.redirect("/")
    } catch (err) {
        res.status(400).send(err.message)
    }
})

// GET - fetch user as JSON by id
app.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).send("User not found")
        res.json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// POST - delete user
app.post("/delete/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.redirect("/")
    } catch (err) {
        res.status(500).send(err.message)
    }
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
