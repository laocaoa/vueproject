<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input" @input="handleInputChange" v-focus>
    <div ref="searchList" class="content" v-show="markShow">
      <ul>
        <li v-for="item of filterCityList">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'city-search',
  data () {
    return {
      markShow: false,
      cityList: [],
      filterCityList: [],
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
    },
    handleGetDataErr (res) {
    	console.log(res)
    },
    handleInputChange (e) {
      const inputValue = e.target.value
      if (inputValue != '') {
        this.markShow = true
        for (let i = 0;i<this.cityList.length;i++) {
        		if (this.cityList[i].title == inputValue.toUpperCase()) {
        			this.filterCityList = this.cityList[i].lists
        		}
        }
      }else{
        this.markShow = false
      }
    }
  },
  mounted () {
  	this.getCityData()
  	this.scroll = new BScroll(this.$refs.searchList, {
  		probeType: 2
  	})
  },
  watch: {
    filterCityList () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .search
    height: 36px
    background: $bgColor
    padding: .03rem .3rem
    box-sizing: border-box
    margin-top: -1px
    // position: relative
    z-index: 222
    .search-input
      height: 31px
      width: 100%
      display: block
      border: none
      font-size: .26rem
      text-align: center
      padding: 0 .2rem
      box-sizing: border-box
      border-radius: .1rem
    .content
      position: absolute
      z-index: 1
      background: #f5f5f5
      top: 1.62rem
      right: 0
      left: 0
      bottom: 0
      overflow: hidden
      ul
        li
          font-size:.28rem
          color: #333
          padding: .28rem
          background: #fff
          border-bottom: 1px solid #eee
</style>
