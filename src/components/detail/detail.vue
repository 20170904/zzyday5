<template>
 <div>
    <div class="detailTop">
      <span class="left">
      <img src="./img/back.png">
      </span>
      <span class="middle">商品列表</span>
      <span class="right">
        <img src="./img/imgtk-new.png">
      </span>
    </div>
    <div class="search">
        <div class="innerss">
        <span class="iconer">
          <img src="./img/search.png" >
        </span>
        <input placeholder="点击搜索商品" >
        </div>
      </div>
    <div class="warppr">
    <div id="xuan">
      <div class="titledet">默认</div>
      <div class="titledet">销量</div>
      <div class="titledet">价格</div>
      <div class="titledet">筛选</div>
    </div>
    <div class="saixuan">
      <div id="xuan1" v-show="false">
        <ul>
          <li>默认排序</li>
          <li>人气排序</li>
          <li>最新上架</li>
          <li>按评论</li>
        </ul>
        <div class="opacy"></div>
      </div>
      <div id="xuan2" v-show="true">
           <div class="xuan2left">
              <span>品牌</span>
              <span>年龄</span>
              <span>体型</span>
              <span>颗粒大小</span>
              <span>均价</span>
              <span>重量</span>
              <span>主要配方</span>
            </div>
           <div class="xuan2right">
             <div class="titleTop">
               <div><span>按热度</span></div>
               <div><span>按字母</span></div>
             </div>
             <div class="scroller22">
               <scroller>
             <ul class="redu">


                <li>全部</li>
                <li>比瑞吉</li>
                <li>哈士奇</li>
                <li>张三丰</li>
                <li>张无忌</li>
                <li>路飞</li>
                <li>比瑞吉</li>
                <li>哈士奇</li>
                <li>张三丰</li>
                <li>张无忌</li>
                <li>路飞</li>
                <li>比瑞吉</li>
                <li>哈士奇</li>
                <li>张三丰</li>
                <li>张无忌</li>
                <li>路飞</li>
                <li>比瑞吉</li>
                <li>哈士奇</li>
                <li>张三丰</li>
                <li>张无忌</li>
                <li>路飞</li>
                <li>比瑞吉</li>
                <li>哈士奇</li>
                <li>张三丰</li>
                <li>张无忌</li>
                <li>路飞</li>


              </ul>
               </scroller>
             </div>

              <div class="zimu">

              </div>
          </div>
      </div>
    </div>
      <div v-show='true'>
     <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      <h2>我是商品列比饿哦2</h2>
      </div>
    </div>


 </div>
</template>

<script>
    export default{
    data(){
        return{
        }
     }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  add(a)
    b = unit(a/750*16,rem)
    return b
body ,html
  height 100%
  overflow hidden
#xuan
  width 100%
  height 40px
  display flex
  font-size 20px
  line-height 40px
  text-align center
  position relative
  &:after
    content ''
    position absolute
    bottom  0
    left 0
    background gainsboro
    width 100%
    height 1px
    transform scaleY(0.5)
  .titledet
     flex 1
.saixuan
  position absolute
  overflow hidden
  height 730px
  width 100%
  top 151px
  left 0
  #xuan2
    width 100%
    height 730px
    background white
    top 0
    left 0
    position absolute
    .xuan2left
      width add(188)
      overflow hidden
      height 720px
      float left
      background #f5f5f5
      span
        display block
        float left
        line-height 35px
        height 35px
        width add(188)
        font-size 14px
        text-align center
        background #f5f5f5

    .xuan2right
      width add(281*2)
      float left
      overflow hidden
      .scroller22   //未完成
        overflow hidden
        position relative
      .titleTop
        display flex
        width add(281*2)
        height 25px
        margin 8px 0 10px 0
        div
          flex 1
          font-size 0
          span
            display: inline-block;
            width: 110px;
            margin  0 10px
            background #f5f5f5
            height: 25px;
            line-height: 25px;
            text-align: center;
            border-radius 4px
            font-size 14px


      .redu
        width add(281*2)
        font-size 14px
        overflow hidden
        position relative
        padding 10px
        box-sizing border-box
        li
          float left
          width add(281*2)
          height: 35px;
          line-height: 35px




  #xuan1
    width 100%
    height 730px
    top 0
    left 0
    position absolute
    .opacy
      width 100%
      height 562px
      background black
      opacity .5
    ul
      overflow hidden
      position relative
      li
        background #f5f5f5
        height 42px
        padding 10px
        font-size: 14px
        box-sizing border-box
        line-height 22px
        text-align left
        border 1px solid #f5f5f5
.detailTop
  width 100%
  height add(100)
  position: relative
  box-sizing border-box
  padding 0 add(24)
  border-bottom: 1px solid #f3f3f3;
  display  flex
  span
    display block
    flex 1
  .middle
    text-align center;
    font-size: 19px
    line-height  add(100)
  .left
    text-align left
    line-height add(100)
    img
      width add(18)
      height add(31)
  .right
    text-align right
    line-height add(100)
    img
      width add(40)
      height add(40)
.search
  height add(120)
  padding add(20)
  width 100%
  box-sizing border-box
  background white
  line-height add(40)
  position relative
  border none
  &:before
    content ''
    position absolute
    bottom 0
    left 0
    background gainsboro
    width 100%
    height 1px
    transform scaleY(0.5)
  &:after
    content ''
    position absolute
    top 0
    left 0
    background gainsboro
    width 100%
    height 1px
    transform scaleY(0.5)
  .innerss
    overflow: hidden
    background #f5f5f5
    padding 8px 0
    border-radius 6px
    span
      display inline-block
      width 40px
      height 26px
      background #f5f5f5
      text-align right
      padding-top 0
      box-sizing border-box
      img
        width 14px
        height 14px
    input
      display inline-block
      width 80%
      height 100%
      background #f5f5f5
      box-sizing border-box
      line-height 26px
      &::-webkit-input-placeholder
        font-size 12px　
</style>
