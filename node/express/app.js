const express = require("express");
const fs = require('fs');
const path = require('path');
const config = require('./config'); // 引入配置管理模块
const logger = require('./logger'); // 引入日志模块
const app = express();

// 使用try-catch监听启动异常
try {
    app.listen(config.port, () => {
        logger.info(`Server started on port ${config.port}`);
    });
} catch (error) {
    logger.error(`Server startup failed: ${error}`);
    process.exit(1);
}

// 日志记录中间件
const logRequest = (req, res, next) => {
    logger.info(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
app.use(logRequest);

/**
 * 配置GET请求的处理方法
 * 当用户访问"/home"时，返回"首页"文本
 */
app.get("/home", (req, res) => {
    res.send("首页");
});

/**
 * 配置POST请求的处理方法
 * 当用户发起POST请求到"/login"时，返回"登录"文本
 */
app.post("/login", (req, res) => {
    res.send("登录");
});

// 错误处理中间件
app.use((err, req, res, next) => {
    logger.error(`Error handling middleware: ${err.stack}`);
    res.status(500).send('Something broke!');
});
module.exports = app;