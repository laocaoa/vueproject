<template>
  <div class="slide_container">
    <swiper :options="swiperOption" v-if="swiperShow">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="slide_img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-swiper',
    props:{
      swiperList: Array
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          autoplay: 2000,
          pagination: '.swiper-pagination'
        },
      }	
    },
		computed: {
			swiperShow () {
				return !!this.swiperList.length
			}
		}
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: #fff!important
  .swiper-pagination .swiper-pagination-bullets
    background: #ddd
  .slide_container
    overflow: hidden
    height: 0
    padding-bottom: 26.6%
    .slide_img
      width: 100%
</style>
