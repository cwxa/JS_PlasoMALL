const Koa = require('koa')

const app = new Koa()
// 中间件,ctx上下文
app.use(async (ctx, next) => {
    console.log(ctx.request.url)
    ctx.body = 'hello world'
    ctx.status = 200
    // console.log(ctx.body)
    // console.log(ctx.status)

    // console.log('next')
    // console.log(ctx.request)
    // console.log(ctx.response)

    // console.log(ctx.req)
    // console.log(ctx.res)
    await next()
})

app.use(async (ctx, next) => {
    console.log('next')
    await next()
})

app.listen(3000, () => {
    console.log('server is running at port 3000')
}
)