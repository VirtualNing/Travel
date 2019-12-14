<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont hot-icon">&#xe623;</span>
      <span class="hot-scenic">周末去哪儿</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of remcommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      remcommendList: [{
        id: '0001',
        imgUrl: require('@/assets/Image/weekend/one.jpg'),
        title: '长隆旅游度假区',
        desc: '一站式旅游度假胜地，广东必游景点'
      },
      {
        id: '0002',
        imgUrl: require('@/assets/Image/weekend/two.jpg'),
        title: '长隆野生动物世界',
        desc: '熊猫三胞胎，与您共享欢乐'
      },
      {
        id: '0003',
        imgUrl: require('@/assets/Image/weekend/three.jpg'),
        title: '广州星期8小镇',
        desc: '让孩子感知成人的苦与乐趣'
      },
      {
        id: '0004',
        imgUrl: require('@/assets/Image/weekend/two.jpg'),
        title: '珠海长隆海洋公园',
        desc: '经历一场难忘的深海历奇之旅'
      },
      {
        id: '0005',
        imgUrl: require('@/assets/Image/weekend/one.jpg'),
        title: '长隆飞鸟乐园',
        desc: '长隆飞鸟乐园，一个真正看鸟飞的地方'
      },
      {
        id: '0006',
        imgUrl: require('@/assets/Image/weekend/three.jpg'),
        title: '深圳野生动物园',
        desc: '放养式的动物园让你和动物们"零距离"'
      }]
    }
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
    padding-bottom: 33.9%
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
