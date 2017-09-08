<template>
      <div id="wraper">
        <div id="download" v-show="isclose">
          <div id="close" @click="closeDownload">
            <div></div>
          </div>
          <div id="img1">
            <img src="./211547bb51dd23758f74fb86e9d7aae5.png">
          </div>
        </div>
        <el-header></el-header>

        <div>
          <router-view></router-view>
        </div>

        <el-footer></el-footer>
      </div>


</template>

<script>
  import Bscroll from 'better-scroll'
  import header from '../header/header.vue';
  import footer from '../footer/footer.vue'
    export default{
      components:{
        'el-header':header,
        'el-footer':footer,
      },
      data(){
        return{
          isclose:true
        }
      },
      methods:{
        closeDownload(){
          this.isclose=!this.isclose;
        },
        created(){
          this.$nextTick(()=>{
            new Bscroll(this.$refs.listers,{
              click:true
            })
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  add(a)
    b = unit(a/750*16,rem)
    return b
  .list1
    position relative
    overflow hidden
  .outer
    width 100%
    height 520px
  #test
    width add(400)
    height add(400)
    background red
  html,body
    font-size 21px
    overflow hidden
    width 100%
    height 100%
    #wraper
      width 100%
      height 100%
    .scroler
      position relative
      width 100%
      height add(895)
    #download
      position relative
      width 100%
      height (110/750*16)rem
    #img1 img
      width 100%
      height 100%
    #close
      width 19px
      height 19px
      position absolute
      top: 25%;
      left: 2%;
      div
        width 100%
        height 100%
        background url("../../images/index/closebtn_03.png") no-repeat
        background-size 100% 100%

</style>
