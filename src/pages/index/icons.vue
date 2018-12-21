<template>
  <div class="icons_container">
    <swiper :options="swiperOption">
    	<!-- slides -->
    	<swiper-slide v-for="page of pageList" :key="page.id">
    		<div class="item_area">
          <div class="item" v-for="item of page" :key="item.id">
            <img :src="item.iconUrl">
            <p class="item_txt">{{item.txt}}</p>
          </div>
        </div>
    	</swiper-slide>
    	<!-- Optional controls -->
    	<div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'index-icons',
  props:{
    iconList: Array
  },
  data () {
    return{
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pageList () {
      const pages = []
      this.iconList.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons_container >>> .swiper-pagination
    bottom: 0!important
  .icons_container >>> .swiper-container
    height: 100%!important
  .icons_container
    height: 3.8rem
    background: #fff
    .item_area
      display: flex
      flex-wrap: wrap
      padding-top: .1rem
      .item
        width: 25%
        height: 1.5rem
        text-align: center
        line-height: 0.9
        padding-top: .1rem
        img
          width: 1.1rem
          height: 1.1rem
        .item_txt
          font-size: .28rem
          color: #212121
</style>
