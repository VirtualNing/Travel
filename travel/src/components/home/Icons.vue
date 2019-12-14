<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.textContent}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      IconsList: [
        {
          id: '0001',
          imgUrl: require('@/assets/Image/icons/innBnb.png'),
          textContent: '民宿客栈'
        },
        {
          id: '0002',
          imgUrl: require('@/assets/Image/icons/bargainflight.png'),
          textContent: '低价机票'
        },
        {
          id: '0003',
          imgUrl: require('@/assets/Image/icons/group.png'),
          textContent: '特惠酒店'
        },
        {
          id: '0004',
          imgUrl: require('@/assets/Image/icons/haiwai.png'),
          textContent: '海外酒店'
        },
        {
          id: '0005',
          imgUrl: require('@/assets/Image/icons/you.png'),
          textContent: '一日游'
        },
        {
          id: '0006',
          imgUrl: require('@/assets/Image/icons/bus.png'),
          textContent: '汽车.船票'
        },
        {
          id: '0007',
          imgUrl: require('@/assets/Image/icons/tuan.png'),
          textContent: '旅游团购'
        },
        {
          id: '0008',
          imgUrl: require('@/assets/Image/icons/freeTravel.png'),
          textContent: '自由行'
        },
        {
          id: '0009',
          imgUrl: require('@/assets/Image/icons/car.png'),
          textContent: '专车自驾'
        },
        {
          id: '00010',
          imgUrl: require('@/assets/Image/icons/aroundtravel.png'),
          textContent: '周边短途'
        },
        {
          id: '00011',
          imgUrl: require('@/assets/Image/icons/ka.png'),
          textContent: '赚钱信用卡'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.IconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibies.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
  height: 0;
  padding-bottom: 50%;

.icon
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;

  .icon-img
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content
      display: block;
      margin: auto;
      height: 100%;

  .icon-desc
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: $darkTextColor;
    ellipsis()
</style>
