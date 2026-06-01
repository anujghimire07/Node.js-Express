const http = require("http")
const fs = require("fs")
const url =require("url")

const MyServer = http.createServer((req, res) => {

    console.log("new request recieved")

fs.appendFile("./fs file.txt", `this was appended at ${Date()}`, ((err, result)=>{
    if(err){
        console.log("ERROR OCCURRED")
    }
    else{
        console.log("append successful")
    }
}))

const MyURL = url.parse(req.url, true)

switch (/*req.url */ MyURL.pathname) { //can only be used when url package is installed and url module imported 
        case "/": res.end("this is the home page")
            break
        case "/products": res.end("this is products page")
            break
        case "/about":
            const username = MyURL.query.name
            if (!username) {
                res.end("this is about page")
            }
            else {
                res.end("this is about page and " + username + " has requested")
            }
            break
        default: res.end("404 not found")
    }
})

MyServer.listen(8000, () => { console.log("SERVER STARTED") })
