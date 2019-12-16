<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont hot-icon">&#xe623;</span>
      <span class="hot-scenic">周末去哪儿</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="require('@/assets/' + item.imgUrl)" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.descText}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibies.styl'
@import '~@/assets/styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    width: 100%
    height: .8rem
    line-height: .8rem
    text-indent: .1rem
    .hot-icon
      display: inline-block
      margin-right: .1rem
      font-size: .4rem
      color: $baColor
    .hot-scenic
      display: inline-block
      color: #15161a
      font-size: .35rem
      font-weight: 550
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 32.7%
    border-radius: .3rem
  .item-img
    width: 100%
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
</style>
