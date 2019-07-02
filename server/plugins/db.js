module.exports = app =>{
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{    //链接mongdb，创建node-vue-moba数据库
        useNewUrlParser:true
    })

    require('require-all')(__dirname + '/../module')
}