const fs = require("fs")



const readStream = fs.createReadStream("./files/1.txt", {
    start: 8,
    end: 20
})

readStream.on("data", (data) => {
    console.log(data)
    console.log(data.toString())
})