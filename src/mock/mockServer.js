/*引入此处使用es6的语法，src下是要打包编译的，故脚手架下是可以打包编译的*/


/*step1:引入mockjs  &&   引入data*/
/*此处先引入两个，剩下的后面用到在引入就好*/
import Mock from "mockjs"
import indexPage from "./mock/firstPage.json"



// 注册路由
Mock.mock("/api/indexPage",{
  code:0,  //表示成功的状态
  data: indexPage
})

/*在main.js中将上述代码引入一下即可生效
* 然后发ajax请求，测试数据是否接收数据成功
* */





