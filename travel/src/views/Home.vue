<template>
  <div class="home">
    <Home-header/>
    <Home-swiper></Home-swiper>
    <Home-icons></Home-icons>
    <Home-recommend/>
    <Home-weekend/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeRecommend from '@/components/home/Recommend'
import HomeWeekend from '@/components/home/Weekend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
