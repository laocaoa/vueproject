<template>
	<div class="main">
		<city-header></city-header>
		<city-search></city-search>
		<slide-title ref="slidetle"></slide-title>
		<city-list class="listContent" ref="list"
		 @scroll="getScrollY" 
		 @fixchange="handleFixChange" 
		 @changeTxt="handleChangeTxt"
		 @changeSideBar="handleChangeSideBar"
		 ></city-list>
		<city-sidebar :cityList="cityList" @changeLetter="handleChangeLetter" ref="sidebar"></city-sidebar>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import CityHeader from './header'
import CitySearch from './search'
import CityList from './list'
import CitySidebar from './sidebar'
import SlideTitle from './slidetitle'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
		CityList,
		CitySidebar,
		SlideTitle
	},
	data () {
		return {
			cityList: []
		}
	},
	methods: {
		getCityData () {
				axios.get('./api/index.json',{
					
				})
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handleGetDataErr.bind(this))
		},
		handleGetDataSucc (res) {
			this.cityList = res.data.data.city
			console.log(this.cityList)
		},
		handleGetDataErr (res) {
			
		},
		handleChangeLetter (item) {
			this.$refs.list.scrollToIndex(item)
			this.$refs.slidetle.changeTxt(item)
			console.log(item)
		},
		getScrollY (e) {
			// console.log(e.y)
			this.$refs.slidetle.swithShow(!(e.y >= -359))
		},
		handleFixChange (diff) {
			this.$refs.slidetle.setMove(diff || 0)
		},
		handleChangeTxt (title) {
			this.$refs.slidetle.changeTxt(title)
		},
		handleChangeSideBar (index) {
			this.$refs.sidebar.handleChangeSidebar(index)
		}
	},
  mounted () {
  	// console.log(this.$route.query.id)
    console.log(this.$route.params.id)
		this.getCityData()
  },
  activated () {
    console.log(this.$route.params.id) 
  }
}
</script>

<style lang="stylus" scoped>
	.main
		position: absolute
		left: 0
		right: 0
		top: 0
		bottom: 0
		display: flex
		flex-direction: column
		.listContent
			flex: 1
</style>
