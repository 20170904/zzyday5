<template>

    <div>
      <mt-swipe :auto="8000" class="items">
        <mt-swipe-item ><img src="../../images/lunbo/11.jpg" class="item"></mt-swipe-item>
        <mt-swipe-item ><img src="../../images/lunbo/1.png" class="item"></mt-swipe-item>
        <mt-swipe-item ><img src="../../images/lunbo/2.jpg" class="item"></mt-swipe-item>
        <mt-swipe-item ><img src="../../images/lunbo/3.jpg" class="item"></mt-swipe-item>
      </mt-swipe>
    </div>

</template>

<script>
//1.图片个数 2.循环时间 3.图片本身 4.循环时间
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.items
  width 100%
  height (320/750*16)rem
.item
  width 100%
  height (320/750*16)rem
</style>
