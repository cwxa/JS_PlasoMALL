const http = require("http")
//四步走
const server = http.createServer()

server.on("request", function (req, res) {
    console.log("visit web server")
    //浏览器请求get
    const url = req.url
    const method = req.method
    const str = "use:" + method + " " + "url:" + url
    console.log(str)

    res.setHeader("Content-Type", "text/html;charset=utf-8")
    //设置报头保证中文显示
    res.end("你好：" + str)

})

server.listen(8080, function () {
    console.log("你好：server running at http://127.0.0.1:8080")
})