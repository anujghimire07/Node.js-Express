const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const app = express()



//routes(gives html data)
app.get("/users", (req, res) => {
    const html_data = `
    <ul>
    ${users.map(i => `<li>${i.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html_data)
})

//dynamic parameter (gives json data)
app.get("/api/users/:user_id", (req, res) => {
    const id = Number(req.params.user_id)
    const i = users.find((i) => i.id === id)
    return res.json(i)
})

//routes (gives json data)
app.get("/api/users", (req, res) => {
    return res.json(users)
})

//create new user
app.use(express.urlencoded({ extended: true }))
app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => { }) //opposite of json.stringify is json.parse()
    return res.json({ status: "success", id: users.length })
})

//edit user with id
app.patch("/api/user/:id", (req, res) => {
    res.json({ status: "pending" })
})

//delete user with id
app.delete("/api/user/:id", (req, res) => {
    res.json({ status: "pending" })
})


app.listen(8000, () => console.log("server started at port 8000"))
