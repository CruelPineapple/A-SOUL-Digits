const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', 
    {
        "target": "http://sakurajimama1.ltd",
        "changeOrigin": true,
        pathRewrite:{
            "^/api": ""
        }
    }))
}