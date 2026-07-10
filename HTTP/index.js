const http = require("http")
const fs = require("fs")


const myServer = http.createServer((req, res) => { //<== creates server

if(req.url==="/favicon.ico") return res.end();

    console.log("new Reuest recieved");
    // console.log(req.headers)

    const log = `${Date.now()}: new request recieved : ${req.url}\n`
    fs.appendFile("./log.txt", log, (err, result) => {
        res.end("hello from server")
    })

    switch (req.url) {
        case "/": res.end("home page")
            break;

        case "/about": res.end("about page")
            break;

        case "/contact": 
        break;

        default: res.end("404 not found")
    }



});

myServer.listen(8000, () => console.log("Sever started successfully"));
