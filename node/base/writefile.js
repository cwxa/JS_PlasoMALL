const fs = require("fs")
fs.writeFile("./files/22.txt", "abcd", function (err) {
    if (err) {
        console.log("fail")

    }
    console.log("ok")
})