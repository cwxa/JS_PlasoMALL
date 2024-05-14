const http = require("http")
//四步走
const server = http.createServer()

server.on("request", function (req, res) {
    console.log("visit web server")
})

server.listen(8080, function () {
    console.log("server running at http://127.0.0.1:8080")
})