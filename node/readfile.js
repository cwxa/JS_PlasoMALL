const fs = require("fs")

fs.readFile("./files/1.txt", "utf8", function (err, dataStr) {
    console.log(err)
    //读取成功err为null
    console.log("------")
    console.log(dataStr)
})

fs.readFile("./files/222.txt", "utf8", function (err, dataStr) {
    console.log(err)
    //读取成功err为null
    console.log("------")
    console.log(dataStr)
})