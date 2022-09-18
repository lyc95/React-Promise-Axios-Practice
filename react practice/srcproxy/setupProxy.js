const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{//所有带有/api1前缀的请求都会经过这个代理配置
            target:'http://localhost:5000',//请求转发给谁
            changeOrigin:true,//控制服务器收到的请求头中host的值(3000 -> 5000, true -> host = 5000, false -> host = 3000)
            //有些服务器可能会对自己origin以外的host会有所限制，所以最好加上去
            pathRewrite:{'^/api1':''}//重写请求路径把，/api1前缀变成空字符串
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}