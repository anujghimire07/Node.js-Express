require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")

const app = express()

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("MVC Architecture CRUD API")
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
