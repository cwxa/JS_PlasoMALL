const express = require('express');
const app = express();

//普通中间件，没有限制，只要匹配到就执行
app.use((req, res, next) => {
    console.log("match middle 1/")
    res.send("<h1>normal middle 1</h1>")
    next()
})

app.use((req, res, next) => {
    console.log("match middle 2/")
    res.send("<h1>normal middle 2</h1>")
})

//不同方法相同路径匹配
app.use("/home", (req, res, next) => {
    console.log("match /home")
    res.send("<h1>Hello from express home</h1>")
})
app.post("/home", (req, res, next) => {
    console.log("match /home post")
    res.send("<h1>Hello from express home</h1>")
})
app.get("/home", (req, res, next) => {
    console.log("match /home get")
    res.send("<h1>Hello from express home</h1>")
})

//相同的路径不同的方法，对应返回不同的内容
app.get("/homepage", (req, res, next) => {
    console.log("match /homepage get")
    res.send("<h1>Hello from express homepage</h1>")
    res.end("data")
})

app.post("/homepage", (req, res, next) => {
    console.log("match /homepage post")

    res.end("data")
})



app.listen(3000, () => {
    console.log("welcome express")
})