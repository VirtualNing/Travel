<template>
  <div>
    <Detail-banner></Detail-banner>
    <Detail-header></Detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner'
import DetailHeader from '@/components/detail/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      code: ''
    }
  },
  methods: {
    getRouterCode () {
      this.code = this.$route.query.code
      console.log(this.code, 123)
    }
  },
  activated () {
    this.getRouterCode()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
