const fs = require("fs");

// 使用 readFile 而不是 writeFile
fs.readFile("./files/std.txt", 'utf8', function (err, dataStr) {
    if (err) {
        return console.log("fail");
    }
    console.log("ok");

    // 现在 dataStr 是有值的，可以进行操作
    const arrOld = dataStr.split(' ')
    const arrNew = []

    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'));
    })

    const newStr = arrNew.join('\n')
    console.log(newStr)

    fs.writeFile("./files/stdnew.txt", newStr, function (err) {
        if (err) {
            console.log("fail")

        }
        console.log("ok")
    })
})
