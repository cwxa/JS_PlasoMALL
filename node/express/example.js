const express = require('express');
const app = express();

app.post('/login', (req, res) => {
    let islogin = false;
    req.on('data', (chunk) => {
        console.log(chunk.toString())
        if (chunk.toString() === 'username=admin&password=123456') {
            islogin = true;
        }
    })
    req.on('end', () => {
        if (islogin) {
            res.end('登录成功')
        } else {
            res.end('登录失败')
        }
    })

})

app.post('/register', (req, res) => {

    let isregister = false;
    req.on('data', (data) => {
        const dataString = data.toString();
        const dataObj = querystring.parse(dataString);
        isregister = true;
    })


    req.on('end', () => {
        if (isregister) {
            res.end('注册成功')
        } else {
            res.end('注册失败')
        }
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})