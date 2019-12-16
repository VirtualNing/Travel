<template>
  <div>
    <City-header/>
    <City-search />
    <City-list :cities="allcities" :hot="hotCities" :letter="letter"/>
    <City-alphabel :cities="allcities" @change="handleLetterChange"/>
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header'
import CitySearch from '@/components/city/Search'
import CityList from '@/components/city/List'
import CityAlphabel from '@/components/city/Alphabel'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabel
  },
  data () {
    return {
      allcities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo: function () {
      this.$axios.get('../../city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc: function (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.allcities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange: function (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
