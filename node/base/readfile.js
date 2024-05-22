const fs = require("fs")

fs.readFile("./files/1.txt", "utf8", function (err, dataStr) {
    console.log(err)
    //读取成功时，err为null
    console.log("------")
    console.log(dataStr)
})

fs.readFile("./files/222.txt", "utf8", function (err, dataStr) {
    console.log(err)

    console.log("------")
    console.log(dataStr)
})

fs.promises.readFile(
    "./files/1.txt", {
    encoding: 'utf-8'

}).then(res => {
    console.log("结果：", res)

}).catch(err => {
    console.log("错误：", err)
})