<template>
  <Detail-banner></Detail-banner>
</template>

<script>
import DetailBanner from '@/components/detail/Banner'
export default {
  name: 'Detail',
  components: {
    DetailBanner
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

</style>
