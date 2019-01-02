<template>
  <div id="index_page">
    <index-header></index-header>
    <index-swiper :swiperList="swiperList"></index-swiper>
    <index-icons :iconList="iconList"></index-icons>
    <ul class="index_location_ul">
      <li class="location_ul_left location_ul_li">
        <span class="iconfont location">&#xe647;</span>定位失败
      </li>
      <li class="location_ul_right location_ul_li" @click="change">
				<span class="iconfont world">&#xe670;</span>必游榜单
			</li>
    </ul>
		<ul class="index_tour_ul">
			<li class="tour_ul_left tour_ul_li"></li>
			<li class="tour_ul_right tour_ul_li"></li>
		</ul>
    <index-hot></index-hot>
    <index-guss></index-guss>
    <index-weekend></index-weekend>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons from './icons'
import IndexHot from './hot'
import IndexGuss from './guss'
import IndexWeekend from './weekend'
import IndexFooter from './footer'
import axios from 'axios'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
		IndexHot,
    IndexGuss,
    IndexWeekend,
    IndexFooter
  },
  data () {
    return {
        swiperList: [],
        iconListOne: [],
        iconList: []
    }  
  },
	computed: {
		...mapState(['city']),
		...mapGetters(['doubleCity'])
	},
  methods: {
		...mapMutations(['changeCity']),
		...mapActions(['changeCityFiveSeconds']),
    getIndexData () {
        axios.get('./api/index.json',{
					
				})
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
    },
    handleGetDataErr () {
        console.log('error')
    },
		change () {
			this.changeCity('哈尔滨')
			this.changeCityFiveSeconds('日本')
			// this.$router.push({ path: '/city', query: { id: 123 }})
			this.$router.push({ name: 'City', params: { id: 123 }})
		}
  },
  created () {
    this.getIndexData()
    console.log(this.city)
		console.log(this.doubleCity)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  #index_page
    background: #f5f5f5
    width: 100%
    overflow-x: hidden
    .index_location_ul
      width: 100%
      display: flex
      flex-wrap: wrap
      position: relative
      background: #fff
      &:before
        height: 1px
        width: 100%
        content: ''
        overflow: hidden
        position: absolute
        top: 0
        left: 0
        border-top: 1px solid #e0e0e0;
        transform: scaleY(.5)
      .location_ul_li
        width: 50%
        height: .98rem
        font-size: .28rem
        color: $txtColor
        text-align: center
        line-height: .98rem
        .location
          font-size: .45rem
          position: relative
          top: 0.06rem
          margin-right: .01rem
        .world
          position: relative
          top: 0.03rem
          margin-right: .07rem
    .index_tour_ul
      display: flex
      flex-wrap: wrap
      width: 100%
      background: #fff
      margin: .2rem 0
      .tour_ul_li
        height: 1.4rem
        width: 50%
        line-height: 1.4rem
        color: #212121
        font-size: .28rem
      .tour_ul_left
        background: url(http://img1.qunarzz.com/piao/fusion/1811/12/999862443f79a902.png) center center no-repeat
        background-size: auto 100%
        position: relative
        &:before
          content: ""
          width: 1px
          height: 100%
          overflow: hidden
          border-right: 1px solid #e0e0e0;
          position: absolute
          right: 0
          top: 0
          transform: scaleX(.5)
      .tour_ul_right
        background: url(http://img1.qunarzz.com/piao/fusion/1811/80/f76d565689d9a202.png) center center no-repeat;
        background-size: auto 100%;
</style>
