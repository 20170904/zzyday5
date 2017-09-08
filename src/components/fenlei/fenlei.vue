<template>
    <div id="fenlei">

      <div id="headerTop">
         <router-link to="/fenlei"> <div class="les"><span> 分类 </span> </div> </router-link>
         <router-link to="/pinpai"> <div class="rt"><span>品牌</span> <span class="icon"></span></div> </router-link>
      </div>
      <div id="but">

        <div class="butLeft">
          <scroller>
          <ul>
             <li>为你推荐</li>
             <li>狗狗主食</li>
             <li>狗狗日用</li>
             <li>为你推荐</li>
             <li>狗狗主食</li>
             <li>狗狗日用</li>
             <li>为你推荐</li>
             <li>狗狗主食</li>
             <li>狗狗日用</li>
             <li>为你推荐</li>
             <li>狗狗主食</li>
             <li>狗狗日用</li>
             <li>为你推荐</li>
             <li>狗狗主食</li>
             <li>狗狗日用</li>
          </ul>
          </scroller>
        </div>


        <div class="butRight">
          <div id="scrolleras">
          <scroller>
            <div>
            <div class="lists">
              <div class="title">
                <span class="left99">狗狗粮食</span>
                <router-link to="/shangpin">
                 <span class="right">
                   <img src="./img2/0.png">
                 </span>
               </router-link>
              </div>
              <ul class="listers">
                <li>
                  <div><img src="./img2/1.jpg" ></div>
                  <p>狗狗餐具</p>
                </li>
                <li>
                  <div><img src="./img2/2.jpg" ></div>
                  <p>狗狗餐具</p>
                </li>
                <li>
                  <div><img src="./img2/31.jpg" ></div>
                  <p>狗狗餐具</p>
                </li>
                <li>
                  <div><img src="./img2/4.jpg" ></div>
                  <p>狗狗餐具</p>
                </li>
                <li>
                  <div><img src="./img2/5.jpg" ></div>
                  <p>狗狗餐具</p>
                </li>
              </ul>
             </div>

            <div id="hotpair">
              <div class="title2">
               <span>热门品牌</span>
              </div>

              <div class="outters">
              <div class="caonim">
                <img src="./img2/8.jpg" >
              </div>
              <p class="erha">哈士奇</p>
            </div>
              <div class="outters">
                <div class="caonim">
                  <img src="./img2/12.jpg" >
                </div>
                <p class="erha">哈士奇</p>
              </div>
              <div class="outters">
                <div class="caonim">
                  <img src="./img2/13.jpg" >
                </div>
                <p class="erha">哈士奇</p>
              </div>
              <div class="outters">
                <div class="caonim">
                  <img src="./img2/14.jpg" >
                </div>
                <p class="erha">哈士奇</p>
              </div>
              <div class="outters">
                <div class="caonim">
                  <img src="./img2/11.jpg" >
                </div>
                <p class="erha">哈士奇</p>
              </div>
              <div class="outters">
                <div class="caonim">
                  <img src="./img2/11.jpg" >
                </div>
                <p class="erha">哈士奇</p>
              </div>
              <div class="outters">
                <div class="caonim">
                  <img src="./img2/11.jpg" >
                </div>
                <p class="erha">哈士奇</p>
              </div>
            </div>
            </div>
          </scroller>
          </div>
        </div>


      </div>
      <footers></footers>
     </div>
</template>

<script>
  import footers from '../footer/footer.vue'
    export default{
       components:{footers}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
add(a)
  b = unit(a/750*16,rem)
  return b
html,body
  width 100%
  height 100%
  overflow hidden
#fenlei
  width 100%
  height 100%
  overflow hidden
  background white
  #headerTop
    padding: 0 15px
    font-size: 13px
    border-bottom: 1px solid #cbcbcb
    line-height 40px
    height: add(80)
    .les
        width: 50%;
        text-align: right;
        float left
        height 100%
        padding-right: 5%;
        box-sizing border-box
        span
          box-sizing border-box
          display: inline-block;
          height: 40px;
          padding: 0 4px;
          font-weight: 700;
          color: #333;
    .rt
        float left
        text-align: left;
        box-sizing border-box
        width: 50%;
        padding-left:5%;
        position relative
        span
          box-sizing border-box
          display: inline-block;
          height: 40px;
          padding: 0 4px
          font-weight: 700;
          color: #333;
        .icon
          width 14px
          height 14px
          position absolute
          top: 13px;
          right: 15px;
          background url("./img/search-ico.png") no-repeat
          background-size 100% 100%
  #but
    width 100%
    height add(587*2)
    position relative
    .butRight
      width add(305*2)
      float left
      overflow hidden
      background #f3f4f5;
      position relative
      height add(572*2)
      border-top 3px solid #f3f4f5


      #hotpair
        box-sizing: border-box;
        font-size: 14px;
        padding: 15px 5px 20px;
        border-top: 1px solid #f3f4f5
        width add(305*2)
        position relative
        overflow hidden
        background white
        .title2
          color: #999;
          width 100%
          font-size: 12px;
          padding-left: 5px;
          margin-top: 10px;
          box-sizing: border-box;
          margin-bottom 10px
        .outters
          position relative
          float: left;
          background white
          .caonim
            box-sizing border-box
            border: 1px solid #f3f4f5;
            text-align: center;
            padding: 20px 10px 10px;
            position: relative;
            color: #333;
            overflow hidden
            width add(270)
            height add(134)
            img
               display block
               left: 0;
               right: 0;
               margin: 0 auto;
               /*margin-top: 10px;*/
               /*position: absolute;*/
               height: add(90);
               max-width: 100%;
               /*vertical-align: middle;*/
               box-sizing border-box
           .erha
             overflow: hidden;
             text-overflow: ellipsis;
             white-space: nowrap;
             font-size: 12px;
             width add(270)
             margin-top: 10px;
             text-align: center;
             height: 20px;
      .lists
        width 100%
        background: #fff
        font-size: 14px;
        line-height: 1.6
        border-top: 1px solid #f3f4f5;
        box-sizing: border-box;
        padding: 15px 5px 20px;
        .listers
          overflow hidden
          width 100%
          border-top: 1px solid #f3f4f5;
          li
            box-sizing border-box
            width: 33.2%;
            padding: 0 5px;
            margin-top:10px;
            float: left;
            font-size: 14px;
            img
              width 86.7px
              height 86.7px
              display block
            p
              text-align center
              font-size 12px
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 20px;
              color: #333;
              margin-top 10px
              box-sizing: border-box;
        .title
          color #999
          font-size: 12px
          padding-left: 5px
          margin-top: 10px
          width 100%
          box-sizing: border-box;
          .left99
             float left
          .right
             float right
             display block
             text-align center
             img
                width 46px
                height 10px
    .butLeft
      font-size 13px
      width add(70*2)
      overflow hidden
      height 100%
      position relative
      float left
      border-right 3px solid #f3f4f5
      box-sizing border-box
      ul
        li
          box-sizing border-box
          width add(70*2)
          height add(50*2)
          padding add(15*2) 0
          border-bottom: 1px solid #f3f4f5;
          text-align center


</style>
