const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', (chunk) => {
//             req.body = JSON.parse(chunk.toString());
//             next();
//         })
//     }
// }
// )
app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)

})

app.post('/register', (req, res) => {

    console.log(req.body)
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})