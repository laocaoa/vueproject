<template>
  <div class="scroller" ref="lala">
		<div class="content">
      <transition name="loading">
        <div class="loadTip" v-show="isLoading">
          <img src="../../assets/images/load.gif" alt="加载gif" class="loadGif">
        </div>
      </transition>
			<h2>周末去哪儿</h2>
			<div class="weekend-item" v-for="item of 5">
				<div class="item-img-box">
					<img v-lazy="'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'" alt="">
				</div>
				<div class="item-info">
					<p class="info-name">京城周末撒欢</p>
					<p class="info-desc">在帝都过周末，不仅仅是城中游!</p>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'index-weekend',
  data () {
    return{
      isLoading: false,
			isFetching: false,   //判断是否在进行ajax请求
      pageNum: 0,     //下拉加载页数
      moreWeekend: [] 
    }
  },
  methods: {
    createScroller () {
      this.scroll = new BScroll(this.$refs.lala, {
        probeType: 2
      })
    },
    bindEvents () {
    	this.scroll.on('scroll', this.handleScroll.bind(this)),
    	this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
    },
    handleScroll (e) {
    	if (e.y > 60 && !this.isLoading) {
    		this.isLoading = true
        this.getListInfo()
    	}
    },
    handleScrollEnd () {
    	this.isLoading = false
    },
    getListInfo () {
			if (!this.isFetching) {
        this.isFetching = true
				axios.get('/api/index.json')
					.then(this.handleGetListSucc.bind(this))
					.catch(this.handleGetListErr.bind(this))
			}
    },
    handleGetListSucc (res) {
      this.isFetching = false
      this.moreWeekend = this.moreWeekend.concat(res.data.city)
      this.pageNum += 1
      console.log(res)
    },
    handleGetListErr () {
      this.isFetching = false
    }
  },
	mounted () {
		this.createScroller()
    this.bindEvents()
	}
}
</script>

<style lang="stylus" scoped>
  .weekend-item
    margin-bottom: .1rem
    background: #fff
  h2
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
    font-size: 0.28rem
    font-weight: 500
  .item-img-box
    height: 0
    overflow: hidden
    padding-bottom: 37.4375%
    img
      width: 100%
  .item-info
    padding: .14rem .2rem .2rem .2rem
    .info-name
      overflow: hidden
      padding-right: 1.4rem
      color: #212121
      font-size: .28rem
      line-height: .48rem
      white-space: nowrap
      text-overflow: ellipsis
    .info-desc
      overflow: hidden;
      padding-right: 1.4rem
      color: #616161
      font-size: .24rem
      line-height: .42rem
      white-space: nowrap
      text-overflow: ellipsis
	.scroller
    height: 4.8rem
    overflow: hidden
    .loading-enter-active, .loading-leave-active
      transition: opacity .5s
    .loading-enter, .loading-leave-to
      opacity: 0
    .loadTip
      display: flex
      justify-content: center
      .loadGif
        height: 1.5rem
</style>
