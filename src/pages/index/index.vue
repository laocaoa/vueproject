<template>
  <div>
    <index-header></index-header>
    <index-swiper :swiperList="swiperList"></index-swiper>
    <index-icons :iconList="iconList"></index-icons>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons from './icons'
import axios from 'axios'
export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons
  },
  data () {
    return {
        swiperList: [],
        iconListOne: [],
        iconList: []
    }  
  },
  methods: {
    getIndexData () {
        axios.get('./api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
        console.log(res.data.data.swiperList)
        console.log(res.data.data.iconList)
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
    },
    handleGetDataErr () {
        console.log('error')
    }
  },   
  created () {
    this.getIndexData()
  }
}
</script>

<style>

</style>
