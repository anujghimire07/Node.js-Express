let Fname = process.argv[2]
let Lname = process.argv[3]

let fs = require("fs")

if(!Fname || !Lname){
    console.log("please provide your first name and last name")
    return
}
else{
    fs.appendFile("log.txt", `\nuser : ${Fname} ${Lname} ${Date()}`, (err, result) => {
    if (err) {
        console.log("ERROR in append", err)
    }
    else {
        console.log("-------successfully appended-------")
        fs.readFile("log.txt", "utf-8", (err, result) => {
            if (err) {
                console.log("ERROR in reading file")
            }
            else {
                console.log("-------successfully read the file--------")
                console.log(result)
            }
        })
    }
})

}

