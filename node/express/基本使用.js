const express = require("express")

const app = express()

app.get("/home", (req, res) => {
    res.end("首页")
})

app.post("/login", (req, res) => {
    res.end("登录")
})

app.listen(80, () => {
    console.log("启动成功")
})