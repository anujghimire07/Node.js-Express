const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()

//routes (gives json data)
app.get("/api/users", (req, res) => {
    return res.json(users)
})

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

    //  const html_data = `
    // <ul>
    // <li>${a.first_name}</li>
    // </ul>
    // `
    // res.send(html_data)
})

//create new user
app.post("/api/users", (req, res) => {
    res.json({ status: "pending" })
})


//edit user with id
app.patch(("/api/user/:id", (req, res) => {
    res.json({ status: "pending" })
}))

//delete user with id
app.delete(("/api/user/:id", (req, res) => {
    res.json({ status: "pending" })
}))



//we can also integrate all the http methods if the path is same
app.route("/api/users/:user_id")
    .get((req, res) => {
        const user_id = Number(req.params.user_id)
        const i = users.find((i) => i.id === user_id)
        return res.json(i)
    })
    .post((req, res) => {
        res.json({ status: "pending" })
    })
    .patch((req, res) => {
        res.json({ status: "pending" })
    })
    .delete((req, res) => {
        res.json({ status: "pending" })
    })

app.listen(8000, () => console.log("server started at port 8000"))
