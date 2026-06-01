const fs = require("fs/promises")

// console.log(fs)
// const fs = require("fs")

console.log("1")
// fs.writeFileSync("note.txt", "text by writefilesync")
// console.log(fs.readFileSync("note.txt").toString())

// fs.readFile("noe.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("ERROR", err)
//     }
//     else{
//         console.log(result)
//     }
// })
// let a = fs.readFileSync("note.txt", "utf-8")
// console.log(a)

//  fs.appendFileSync("note.txt", "\n text appended by appendfilesync")

// fs.appendFile("note.txt", "\n text appended by fileSync", (err, result) => {
//     if(err){
//         console.log("ERRORRRRR")
//     }
//     else{
//         console.log("text successfully appended")
//     }
// })
async function read() {
    let a = await fs.readFile("note.txt", "utf-8")
    console.log(a)
}
read()

console.log("2")

//when using commonJS, you have to put await inside an async function
//when using module, you do not have to write await inside an async function

//when you are importing promises, you cannot use synchronous fs modules
// ❌ NO readFileSync
// ❌ NO writeFileSync
// ❌ NO appendFileSync