// console.log("hello there, i am JS")

const data = require("./math")


// console.log("the value is", data.add(2, 3))
// console.log("the value is", data.sub(2, 3))
// // console.log("the value is", data.mul(2, 3))
// console.log(data.obj.name)
// // console.log(process.argv)
// // console.log(process.argv[3])//gives the 4th argument in the terminal(starting from 0 index
// // console.log(process.env)
// console.log(process.env.anuzvalue)

let calc = process.argv[2]
let a = Number(process.argv[3])
let b = Number(process.argv[4])

function add(x, y) {
    return x + y

}
function sub(x, y) {
    return x - y
}

if (calc === "add") {
    console.log(add(a, b))
}
if (calc === "sub") {
    console.log(sub(a, b))
}
