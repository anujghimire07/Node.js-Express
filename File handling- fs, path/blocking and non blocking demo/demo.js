//Blocking operation => Synchronous operation
//Non-Blocking operation => Asynchronous operation

let files = require("fs")


console.log("1")
// console.log(files.readFileSync("./data.txt", "utf-8"))

// files.readFile("./data.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log(ERROR)
//     }
//     else{
//         console.log(result)
//     }
// })
console.log("2")

//when using Async, the output will be: 1 => 2 => file data
//when using sync, the output will be: 1 => file data => 2
