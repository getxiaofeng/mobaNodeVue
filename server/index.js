const express = require("express")

const app = express()


app.set('secret','adefdvdvffgaxsa') //在app实例上设置一个secret变量，


app.use(require('cors')())  //中间件，解决跨域问题  
app.use(express.json())     //中间件，解析json数据格式
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./router/admin')(app)      //这里接收admin下index.js中的app并使用
require('./plugins/db')(app) 
require('./router/web')(app)


app.listen(3000,()=>{
    console.log('http://localhost:3000');
})