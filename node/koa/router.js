// 引入必要的模块
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')

// 初始化Koa应用
const app = new Koa()

// 使用bodyParser中间件处理请求体
app.use(bodyParser())

// 配置multer用于处理文件上传
const upload = multer({
    storage: multer.diskStorage({
        // 定义文件上传的目标目录
        destination(req, file, cb) {
            cb(null, './uploads')
        },
        // 定义上传文件的名称
        filename(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})

// 创建用户路由
const userRouter = new KoaRouter({
    prefix: '/user' // 路由前缀
})

// 将用户路由的路径和方法绑定到app上
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 用户路由的GET方法，用于获取用户列表数据
userRouter.get('/', async (ctx, next) => {
    ctx.body = 'user list data'
    await next()
})

// 用户路由的参数化GET方法，用于获取指定ID的用户数据
userRouter.get('/:id', async (ctx, next) => {
    const id = ctx.params.id
    ctx.body = 'user id:' + id
    await next()
})

// 用户路由的GET方法，用于处理查询参数
userRouter.get('/', (ctx, next) => {
    const query = ctx.query
    console.log(query)
    ctx.body = 'user get query' + JSON.stringify(query)
})

// 用户路由的POST方法，用于创建用户
userRouter.post('/', async (ctx, next) => {
    const body = ctx.request.body
    console.log(body)
    ctx.body = 'user post'
    await next()
})

// 用户路由的文件上传POST方法
userRouter.post('/upload', upload.single('avatar'), async (ctx, next) => {
    const file = ctx.file
    console.log(file)
    ctx.body = 'upload success'
    await next()
})

// 用户路由的PUT方法，用于更新用户信息
userRouter.put('/', async (ctx, next) => {
    ctx.body = 'user put'
    await next()
})

// 用户路由的DELETE方法，用于删除用户
userRouter.delete('/', async (ctx, next) => {
    ctx.body = 'user delete'
    await next()
})

// 用户路由的PATCH方法，用于部分更新用户信息
userRouter.patch('/', async (ctx, next) => {
    ctx.body = 'user patch'
    await next()
})

// 启动服务器，监听3000端口
app.listen(3000, () => {
    console.log('server is running at port 3000')
}
)