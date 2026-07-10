const files = require("fs")

// //sync file write
// files.writeFileSync("./test.txt", "this is writefileSync demonstration")



// //Async file write
// files.writeFile("./test.txt","this is writeFile demonstration", (err)=>{} )



files.appendFileSync("./test.txt", `\n ${Date.now()} : this info was added using append`)



//Sync file read
// const result = files.readFileSync("./info.txt", "utf-8")
// console.log(result)



//Async file read
files.readFile("./info.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("ERROR OCCURRED: ANUZ", err)
    }
    else {
        console.log(result)
    }
})



files.copyFileSync("./test.txt", "./info.txt")//copy contents of one file to another, can also be used to copy the contents of a file into a new file eg:  files.copyFileSync("./test.txt", "./copy.txt")

//  files.unlinkSync("./copy.txt") : Deletes a file

console.log(files.statSync("./test.txt").isFile()); //gives file information 
//isFiles is used to see whether it is a file

// files.mkdirSync("mydocs") : create a directory
// files.mkdirSync("mydocs/a/b", { recursive: true })
