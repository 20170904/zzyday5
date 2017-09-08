<template>
    <div class="foot">
      <router-link to="/home/souye"><img src="./footer/main_tab_1_sel.png"></router-link>
      <router-link to="/fenlei"><img src="./footer/main_tab_2.png"></router-link>
      <router-link to="/gouwuche"><img src="./footer/main_tab_3.png"></router-link>
      <router-link to="/denglu"><img src="./footer/main_tab_4.png"></router-link>
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
   .foot
    width 100%
    height add(81)
    display flex
    position absolute
    background white
    border-top 1px solid gainsboro
    bottom  0
    a
      flex 1
      text-align center
      img
         display inline-block
         width add(85)
         height add(81)
 </style>
