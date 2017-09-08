<template>
  <div class="loginright">
    <div class="top">
      <span></span>
      <input type="text" placeholder="已注册手机号">
    </div>
    <div class="middle">
      <span></span>
      <input type="text" placeholder="请输入图片内容">
      <div class="yanzheng"><img src="./img/seccode.jpg"></div>
    </div>


    <div class="bottom">
      <span></span>
      <input type="text" placeholder="密码">
    </div>

  </div>

</template>

<script>
    export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  add(a)
    b = unit(a/750*16,rem)
    return b
  .loginright
    box-sizing border-box
    position relative
    overflow hidden
    width 14.6rem
    padding 0 add(12)
    margin 0 add(30) add(24)
    input
      &::-webkit-input-placeholder, textarea::-webkit-input-placeholder
        color: gainsboro;
        border none
        font-size 14px
    .top
      float left
      width 100%
      height 50%
      padding add(28) 0
      box-sizing border-box
      border-bottom  1px solid gainsboro
      span
        display: inline-block
        width add(34)
        height  add(34)
        background url("./img/ico3.png") no-repeat
        background-size 100% 100%
        margin-right 5px
    .middle
      float left
      position relative
      width 100%
      height 50%
      padding add(28) 0
      box-sizing border-box
      border-bottom  1px solid gainsboro
      span
        display: inline-block
        width add(34)
        height  add(34)
        background url("./img/ico3.png") no-repeat
        background-size 100% 100%
        margin-right 5px
       .yanzheng
         width 80px
         height 30px
         position absolute
         top 50%
         margin-top -15px
         right 0
         img
           width 80px
           height 30px
    .bottom
      float left
      width 100%
      height 50%
      padding add(28) 0
      box-sizing border-box
      border-bottom  1px solid gainsboro
      span
        display: inline-block
        width add(34)
        height  add(34)
        background url("./img/ico4.png") no-repeat
        background-size 100% 100%
        margin-right 5px
</style>
