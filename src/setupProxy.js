const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(
    //     '/api',
    //     createProxyMiddleware({
    //         target: 'https://api.bilibili.com/',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': '',
    //         }
    //     })
    // )
    app.use(createProxyMiddleware('/api', 
    {
        "target": "https://api.bilibili.com",
        "changeOrigin": true,
        pathRewrite:{
            "^.api": ""
        }
    }))
}