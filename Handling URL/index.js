const http = require("http")
const fs = require("fs")
const url = require("url")


const myServer = http.createServer((req, res) => { //<== creates server

    // we can also write this callback code in a function with two parameters res and req and call it in mysever
    if (req.url === "/favicon.ico") return res.end();

    console.log("new Reuest recieved");
    // console.log(req.headers)

    const log = `${Date.now()}: new request recieved : ${req.url} : ${req.method}\n`
    const myurl = url.parse(req.url, true)
    console.log(myurl)

    fs.appendFile("./log.txt", log, (err, result) => {
        res.end("hello from server")
    })

    switch (myurl.pathname) {
        case "/":
            if (req.method === "GET") res.end("home page")
            break;

        case "/about": res.end("about page")
            break;

        case "/contact":
            const name = myurl.query.myname
            const id = myurl.query.myid
            if (!name || !id) {
                res.end("Contact page, give me a name and id")
            }
            else {
                res.end("contact page" + "\n" + "your name is: " + name + "\n" + "your id is: " + id)
            }
            break;

        default: res.end("404 not found")
    }



});

myServer.listen(8001, () => console.log("Sever started successfully"));
