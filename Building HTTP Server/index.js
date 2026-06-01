const http = require("http")
const fs = require("fs")
const url = require("url")


const myserver = http.createServer((req, res) => {

    let data = `${Date.now()}, ${req.url} : new request received\n`

    const MyURL = url.parse(req.url, true) //url.parse shows the url info by breaking down parts of the url into objects and true parses the query string into an object

    console.log(MyURL)

    fs.appendFile("index.txt", data, (err, result) => {
        if (err) {
            console.log("SOME ERROR OCCURRED")
        }
        else {
            console.log("Append Successful")
        }
    })
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
    // console.log(req.headers)
    // console.log(req)


})
myserver.listen(8999, () => { console.log("Server has Started successfully!") })