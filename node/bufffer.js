const fs = require("fs")

const buf = Buffer.alloc(8)
console.log(buf)
console.log(buf[0])
buf[0] = 100
console.log(buf)
console.log(buf[0])