<template>
  <div>
    <Detail-banner
     :sightName="sightName"
     :gallaryImgs="gallaryImgs"
     :bannerImg="bannerImg"></Detail-banner>
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
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getRouterCode () {
      this.code = this.$route.query.code
    },
    getDetailInfo () {
      const url = '../../detail.json'
      this.$axios.get(url).then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  activated () {
    this.getRouterCode()
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
