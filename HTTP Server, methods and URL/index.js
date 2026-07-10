const http = require("http")
const fs = require("fs")
const url = require("url")

const express = require("express")

// const app = express()

// without express when we use routing, the code becomes messy and unmaintainable, we have to import url module to use query and other things.
// but using express, everything is built-in, it makes the code clean, short and easily maintainable. and the query is also built-in so we don't have to import url module to use it
// app.get("/", (req, res) => {
//     return res.send("hello from home page (express)")
// })

// app.get("/about", (req, res) => {
//     if (!req.query.name) {

//         fs.appendFile("./index.txt", `new request on server\n\n`, (error, result) => { })
        
//         return res.send("hello from about page (express)")
//     }
//     else {

//         fs.appendFile("./index.txt", `new request on server by ${req.query.name}\n\n`, (error, result) => { })
         
//         return res.send(`welcome to about page ${req.query.name}`)
//     }
// })

function MyHandler(req, res) {
    const MyURL = url.parse(req.url, true)

    if (req.url === "/favicon.ico") {
        return res.end()
    }

    let data = `${Date.now()}, ${req.url}, ${req.method} : new request received\n\n`

    //url.parse shows the url info by breaking down parts of the url into objects and true parses the query string into an object

    console.log(MyURL) //shows the values parsed by url.parse

    fs.appendFile("index.txt", data, (err, result) => {
        if (err) {
            console.log("SOME ERROR OCCURRED")
        }
        else {
            console.log("Append Successful (without express)")
        }
    })

    switch (/*req.url */ MyURL.pathname) { //can only be used when url package is installed and url module imported 

        case "/": res.end("this is the home page (without express)")
            break

        case "/products": res.end("this is products page (without express)")
            break

        case "/about":
            const username = MyURL.query.name
            const userid = MyURL.query.id
            if (!username || !userid) {
                res.end("this is about page (without express)")
            }
            else {
                res.end(`this is about page and ${username} : ${userid} has requested (without express)`)
            }
            break

        default: res.end("404 not found (without express)")
    }
    // console.log(req.headers)
    // console.log(req)
}


// const myserver = http.createServer(app)

app.listen(8999, () => { console.log("Server has Started successfully!") })
// myserver.listen(8999, () => { console.log("Server has Started successfully!") })


// the code that i have commented out in this file are the code that we have to write to create a server without using express

// but when we are using express, everything is built-in which makes the code clean and easier to write and understand,

// the code that are not commented out is the code you have to write when you are creating a http server using express