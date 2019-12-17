<template>
  <div>
    <Detail-banner></Detail-banner>
    <Detail-header></Detail-header>
    <div class="content">
      <Detail-list :list="list"/>
    </div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner'
import DetailHeader from '@/components/detail/Header'
import DetailList from '@/components/detail/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      code: '',
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 某一连锁店销售'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
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
