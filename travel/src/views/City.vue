<template>
  <div>
    <City-header/>
    <City-search />
    <City-list/>
    <City-alphabel/>
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
  }
}
</script>

<style lang="stylus" scoped>

</style>
