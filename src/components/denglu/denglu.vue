<template>
    <div>
       <div class="loginTop">
         <div class="loginIcon">
           <div class="back"></div>
           <div class="zhuChe">注册</div>
         </div>

         <div class="loginLg">
           <img src="./img/2logo.png">
         </div>
         <div class="loginButtom">
           <div class="dibu">
               <router-link to="/denglu/loginCommon">
                   普通登录
                </router-link></div>
           <div class="dibu">
               <router-link to="/denglu/loginPhoneNumber">
                  手机动态密码登录
              </router-link>
           </div>
         </div>

       </div>

          <router-view></router-view>
        <div class="loginBottom">
          <span class="mima">忘记密码？</span>
          <div class="denglu"><a class="den" href="#">登录</a></div>
          <div class="between"></div>
          <div class="txt">合作网站登录</div>
          <div class="logo">
            <span><img src="./img/zzfb.png" ></span>
            <span><img src="./img/qq.png" ></span>
          </div>

        </div>
    </div>

</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  add(a)
    b = unit(a/750*16,rem)
    return b
body,html
  width 100%
  height 100%
*{
  margin 0
  padding 0
}
.loginTop
  width 100%
  height add(178*2)
  background url("./img/1bg.png") no-repeat
  background-size 100% 100%
  position relative
  .loginLg
    height add(168)
    text-align center
    box-sizing border-box
    padding add(24) 0 add(48) 0
    img
      width add(145)
      height add(100)
  .loginButtom
     width 100%
     height  add(88)
     display flex
     background rgba(255,255,255,0.3)
     .dibu
       flex 1
       text-align center
       font-size 0
       a
        display inline-block
        width 100%
        height 100%
        color white
        font-size add(30)
        text-align center
        line-height add(88)
  .loginIcon
    width 100%
    height: add(100);
    line-height: add(100);
    position: relative;
    box-sizing border-box
    padding  0 add(24)
    .zhuChe
      float right
      color white
      font-size add(30.4)
    .back
       float left
       width add(46)
       margin-top add(5)
       height 70%
       background url("./img/back.png") no-repeat
       background-position 50% 50%
       background-size 50% 50%
  .loginButtom
    width 100%
    height 40px
    position absolute
    bottom 0
.loginBottom
  width 100%
  .mima
    width 100%
    display block
    font-size 14px
    text-align right
    padding 5px add(38) 0
    box-sizing border-box
  .denglu
    width 100%
    height add(80)
    padding 0 add(28)
    box-sizing border-box
    .den
      display block
      width 100%
      height 100%
      background #2ec975
      border-radius 6px
      text-align center
      line-height add(80)
      margin-top 10px
      color white
  .between
    width 100%
    height add(240)
  .txt
    width 100%
    height add(40)
    text-align center
    color gainsboro
    font-size 14px
    padding-top add(10)
    box-sizing border-box
  .logo
    width 100%
    height add(188)
    padding add(36) add(120)
    box-sizing border-box
    display flex
    span
      display inline-block
      flex 1
      text-align center
      img
        width add(120)
        height add(120)
</style>
