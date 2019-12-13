<template>
  <div class="home">
    <Home-header/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header'
export default {
  name: 'home',
  components: {
    HomeHeader
  }
}
</script>
