<template>
	<div>
    <div class="wraper" @click="showGallary">
      <img src="//img1.qunarzz.com/sight/p0/1511/d1/d15b414a07fdb54d90.water.jpg_600x330_40422e2b.jpg" alt="">
    </div>
    <gallary :swiperList="this.swiperList" v-show="gallarySwitch" @close="hideGallary"></gallary>
  </div>
</template>

<script>
import Gallary from '../../components/common/gallary/index.vue'
export default {
  name: 'banner-detail',
  components: {
    Gallary
  },
  data () {
    return {
      gallarySwitch: false
    }
  },
  props: {
    swiperList: Array
  },
  methods: {
    showGallary () {
      this.gallarySwitch = true
    },
    hideGallary () {
      this.gallarySwitch = false
    }
  }
}
</script>

<style scoped>
  .wraper{
    height:0;
    overflow: hidden;
    padding-bottom: 55%;
  }
  .wraper img{
    width: 100%;
  }
</style>
