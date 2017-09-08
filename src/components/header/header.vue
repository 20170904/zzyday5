<template>
    <div id="headerMain">
    <div id="top">
      <div id="left">
      <span>猫站</span>
      <span>|</span>
      <router-link to="/xxx" class="place">上海 <span class="sanjiao"></span></router-link>
      </div>
      <p class="center">
        <input placeholder="搜索商品和品牌"></input>
        <span class="search"></span>
      </p>
      <span class="talk"></span>
    </div>
    <div class="list" >
      <div ref="list6">
      <ul id="bottom" >
        <li><router-link to="/home/souye">首页</router-link></li>
        <li><router-link to="/home/maoliang">猫娘</router-link></li>
        <li><router-link to="/home/temai">特卖</router-link></li>
        <li><router-link to="/home/guantou">罐头超市</router-link></li>
        <li><router-link to="/home/caopin">潮品视频</router-link></li>
        <li><router-link to="/home/xinmiao">新猫课堂</router-link></li>
      </ul>
      </div>
    </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
    export default{
      created(){
          if(!this.scrol6){
            this.$nextTick(()=>{
              this.scrol6=new Bscroll(this.$refs.list6,{
                click:true,
                scrollX: true
              })
            })
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#headerMain
   height 79px
   width 100%
   padding 8px 0
   font-size 16px
   position relative
#top
    width 100%
    height 33px
    padding 5px 10px
    font-size 16px
.talk
    width 25px
    height 25px
    background url("../../images/index/mydope.png") no-repeat
    background-size 100% 100%
    display inline-block
    font-size 16px

#left
    width 103px
    height: 33px
    float: left;
    font-size 16px
    span
      line-height 33px
      font-size 16px
.center
    width 60%
    height 33px
    display inline-block
    overflow hidden
    position relative
    font-size 16px
    .search
        width 25px
        height 25px
        background url("../../images/index/search.png") no-repeat
        background-size 11px 11px
        background-position center
        position absolute
        top 10%
        bottom 50%
        right 3%
        font-size 16px
    input
      &:focus {
        border:none !important;
      }
      &::-webkit-input-placeholder
        font-size: 10px
      width: 100%
      height: 25px
      padding 1px 0
      background-color: #f6f6f6;
      font-size 16px
      border: none
      display block
      position absolute
      bottom 0
      top 0
      left 0
      right 0
      margin auto
.place
    color blueviolet
    text-decoration:underline;
    font-size 16px

.sanjiao
    width 20px
    height 8px
    display inline-block
    background-size: 10px 10px
    background url("../../images/index/index_icon_comment_sanjiao_爱奇艺.png") no-repeat
#bottom
    position relative
    width: 450px;
    height: 36px;
    white-space: nowrap;
    font-size 16px
    li
      width 74.5px
      height 36px
      float left
      line-height 36px
      text-align center
      .active
         color blueviolet
      a
        display block
        font-size 16px

</style>

