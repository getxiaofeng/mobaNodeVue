module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // const Article = require('../../models/Article')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
  
    // 导入新闻数据
    router.get('/news/init', async (req, res) => {
        const parent =await Category.findOne({
            name:'新闻分类'
        })
        const cats = await Category.find().where({
          parent: parent
      }).lean()
      const newsTitles = ["姐姐镜剪影曝光，曜往事大揭秘！", "新版本爆料⑥ | 美梦将成真~永久皮肤、回城特效免费得！", "新版本爆料⑤丨排位优化抢先看，对局环境体验UP！", "王者人生×王者荣耀 | 特权强势升级，来做王者峡谷最靓的仔！", "稷下星之队集结 快手官号回馈超值福利", "7月1日抢先服不停机更新公告", "6月29日全服不停机修复公告", "6月28日全服不停机修复公告", "【已开服】6月26日正式服“稷下星之队”版本更新公告", "【正式服】“稷下星之队”版本异常问题说明", "稷下精彩活动明日到来 任你徜徉王者峡谷", "稷下星之队集结 新版本超值福利回馈", "恭喜eStarPro捧起银龙杯 赛末冲刺惊喜礼不断", "王者大陆的端午宝藏活动公告", "峡谷庆端午 惊喜礼不断", "【6月15日 再战西安 · 2019年KPL春季赛总决赛重启公告】", "王者荣耀世界冠军杯荣耀来袭，KPL赛区选拔赛谁能突围而出？", "【关于2019年KPL春季赛总决赛门票退换及异地用户现场观赛补贴公告】", "世冠小组赛赛程公布，7月3日12点售票开启", "世冠小组赛抽签结果公布，7月3日12点售票窗口开启！"]
      const newsList = newsTitles.map(title => {
          const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
          return{
              categories:randomCats.slice(0,2),
              title:title
          }
      })
      await Article.deleteMany({})
      await Article.insertMany(newsList)
      res.send(newsList)
      })
    app.use('/web/api',router)
}