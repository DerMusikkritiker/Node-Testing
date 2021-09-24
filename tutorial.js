// Integrated stuff in node.js

// console
console.log("Console: " + "Hello World!")

// global - allows to create variables that can be accessed from anywhere in the process
global.testvar = "Hello World! Again!"
console.log("Global: " + global.testvar)

// process - gives information about the current process
let processvar = (process.platform)
console.log("Process: " + processvar)


// events
const { EventEmitter } = require("events")
const eventEmitter = new EventEmitter()
// when the event lunch is triggered, the function is executed
eventEmitter.on("lunch", () => {
    console.log("Events: Lunch is ready!")
})
// triggering the event
eventEmitter.emit("lunch")



// File System (fs)
// importing methods
const { readFile, readFileSync } = require("fs")

// Syncronous
const txt = readFileSync("./hello.txt", "utf8")
console.log(txt)

// using Callback
readFile("./hello.txt", "utf8", (err, txt) => {
    console.log(txt)
})

// async (not working for some reason)
/*
const { readFile } = require("fs").promises
async function hello() {
    const file = await readFile("./hello.txt", "uft8")
}
*/