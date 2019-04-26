<template>
	<!-- <div></div> -->
  <div class="shadowMark" @click="handleGallarClose">
    <swiper :options="swiperOption" class="container" v-if="swiperShow">
    	<swiper-slide v-for="item of swiperList" :key="item.id">
    		<img class="slide_img" :src="item.imgUrl" alt="" @click.stop>
    	</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    swiperList: Array
  },
  data () {
    return {
    	swiperOption: {
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        pagination: ".swiper-pagination",
        paginationType: 'fraction',
    	},
    }	
  },
  computed: {
  	swiperShow () {
  		return !!this.swiperList.length
  	}
  },
	mounted () {

	},
  methods: {
    handleGallarClose () {
      this.$emit('close')//向外暴露close方法
    }
  }
}
</script>

<style scoped>
  .shadowMark{
		position: absolute;
		overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
		z-index: 99;
    background: rgba(0,0,0,1);
  }
	.container{
		width: 100%;
		height: 100%;
	}
	.shadowMark img{
		width: 100%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
  .swiper-pagination-fraction {
    color: #fff;
    font-size: .28rem;
    bottom: 20px;
  } 
</style>
