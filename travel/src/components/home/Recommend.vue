<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont hot-icon">&#xe89a;</span>
      <span class="hot-scenic">当季热门景点</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="require('@/assets/' + item.imgUrl)" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.descText}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
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
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
