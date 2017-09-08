<template>
    <div class="loginLeft">
        <div class="top">
          <span></span>
          <input type="text" placeholder="手机号/邮箱/用户名">
        </div>
        <div class="bottom">
          <span></span>
          <input type="text" placeholder="输入密码">
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
.loginLeft
  box-sizing border-box
  height add(230)
  position relative
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
