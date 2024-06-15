// 引入必要的模块
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')
const static = require('koa-static')


// 初始化Koa应用
const app = new Koa()
// 使用koa-static中间件处理静态资源
app.use(static('./uploads'))
app.use(static('./build'))



// 启动服务器，监听3000端口
app.listen(4000, () => {
    console.log('server is running at port 4000')
}
)