const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")

const app = express()

//middlewares 
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use((req, res, next) => {

    const log = `${req.method} ${req.url} at ${new Date().toISOString()}\n`;
    fs.appendFile("./log.txt", log, (err, result) => {
        if (err) {
            console.error("Log error:", err);
        }
    });

    next(); // VERY IMPORTANT
});

app.get("/", (req, res) => {
    res.send("homepage")
})

//get all users (json)
app.get("/users", (req, res) => {
    res.send(users)
})

//get all users (html)
app.get("/users/api", (req, res) => {
    const data = `
    <ul>
    ${users.map((i) => `<li>${i.first_name}</li>`).join(" ")}
    </ul>
    `
    res.send(data)
})

//get specific user using dynamic parameter
app.get("/users/api/:id", (req, res) => {
    const id = Number(req.params.id)
    const data = users.find((i) => i.id === id)
    res.send(data)
})

//post data
app.post("/users/post", (req, res) => {

    const body = req.body;
    users.push({ id: Date.now(), ...body })
    fs.writeFile("./MOCK_DATA.JSON", JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).send("Error saving data");
        }
    })

    res.send({ message: "data successfully posted", data: users })
})

//patch user data by id
app.patch("/users/patch/:id", (req, res) => {
    const body = req.body;
    const id = Number(req.params.id)
    const index = users.findIndex(i => i.id === id)

    if (index === -1) {
        res.status(404).send("no such users exists")
    }
    else {
        users[index] = { ...users[index], ...body }
        fs.writeFile("./MOCK_DATA.JSON", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).send("Error saving data");
            }
        })

        res.send({ message: "users data patched successfully", patched_data: users[index] })
    }
})

//delete user data by id
app.delete("/users/delete/:id", (req, res) => {
    const id = Number(req.params.id)
    const data = users.findIndex(i => i.id === id)
    if (data === -1) {
        res.status(404).send("no such user exists")
    }
    else {
        const deleted = users.splice(data, 1)
        fs.writeFile("./MOCK_DATA.JSON", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).send("Error saving data");
            }
        })

        res.send({ message: "user data successfully deleted", User: deleted[0] })

    }

})

app.listen(8000, () => console.log("server started successfully"))