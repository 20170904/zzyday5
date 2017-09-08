<template>
  <div class="scroler">
    <scroller>
      <div>
        <lunbo></lunbo>
        <div class="nav1">
          <div><img src="./miaoniang/1.png" ></div>
          <div><img src="./miaoniang/2.png"></div>
          <div><img src="./miaoniang/3.png" ></div>
          <div><img src="./miaoniang/4.png"></div>
        </div>

        <line1></line1>

        <div class="data">
          <div class="dataTop">
            <span>喜乐VS妙乐多</span>
            <i>1元换光头</i>
          </div>
          <a href="###">
            <img src="./miaoniang/9.jpg" >
          </a>

        </div>
        <div class="data">
          <div class="dataTop">
            <span>喜乐VS妙乐多</span>
            <i>1元换光头</i>
          </div>
          <a href="###">
            <img src="./miaoniang/12.jpg" >
          </a>

        </div>
        <div class="data">
          <div class="dataTop">
            <span>喜乐VS妙乐多</span>
            <i>1元换光头</i>
          </div>
          <a href="###">
            <img src="./miaoniang/13.jpg" >
          </a>

        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
  import lunbo from '../lunbo/lunbo.vue'
  import line from  '../line/line.vue'
    export default{
      components:{lunbo,line1:line}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  add(a)
    b = unit(a/750*16,rem)
    return b
  .scroler
    position relative
    width 100%
    height add(895)
  .nav1
    width 100%
    display flex
    div
      flex 1
      img
         display block
         width add(187)
         height add(187)
  .data
   color: #333;
   font-size 16px
  img
    width add(750)
    height add(310)
  .dataTop
    width: 100%;
    font-size: 16px;
    height: 25px;
    padding: 10px;
    i
      font-style: normal;
      font-size: 12px;
      color: #999;
</style>
