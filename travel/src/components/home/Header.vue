<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
      <router-link to="/city">
        <div class="header-right">{{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibies.styl'
 .header
    display: flex
    line-height: $headerHeight
    background: $baColor
    color: #fff
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      margin-top: .12rem
      padding-left: .2rem
      background: #ffffff
      border-radius: 5px
      color: #ccc
    .header-left
      width 0.64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-right
      min-width: 1.04rem
      padding: 1 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: .04rem
        font-size: .24rem
</style>
