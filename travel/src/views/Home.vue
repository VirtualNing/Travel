<template>
  <div class="home">
    <Home-header/>
    <Home-swiper :list="swiperList"></Home-swiper>
    <Home-icons :list="IconsList"></Home-icons>
    <Home-recommend :list="recommendList"/>
    <Home-weekend :list="weekendList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeRecommend from '@/components/home/Recommend'
import HomeWeekend from '@/components/home/Weekend'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      recommendList: [],
      weekendList: [],
      IconsList: []
    }
  },
  methods: {
    getHomeInfo: function () {
      /**
       * const url = '../../test.json'
       * 本地json访问
       * */
      const url = 'http://127.0.0.1/api/getHemoData.php?city=' + this.city
      this.$axios.get(url).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (response) {
      var str = response.data
      if (str.success === true) {
        this.swiperList = str.swiperList
        this.recommendList = str.recommendList
        this.weekendList = str.weekendList
        this.IconsList = str.iconsList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      console.log('activated')
    }
  }
}
</script>
