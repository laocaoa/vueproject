<template>
  <div ref="list" class="wraper">
    <div class="content">
      <div class="sort" ref="current">
        <div class="item-title">当前位置</div>
        <div class="city-container">
          <div class="item-city now-city">北京</div>
        </div>
      </div>
      <div class="sort" ref="hotcity">
      	<div class="item-title">热门城市</div>
      	<div class="city-container hot-container">
      		<div class="item-city hot-item" v-for="item of hotCity">{{item}}</div>
      	</div>
      </div>
      <div class="sort" v-for="item of cityList" :ref='item.title'>
      	<div class="item-title">{{item.title}}</div>
      	<div class="city-container">
      		<div class="normal-item" v-for="city of item.lists">{{city}}</div>
      	</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: "city-list",
  data () {
    return {
      hotCity: [],
      cityList: []
    }
  },
	computed: {
		areaPositions () {
			let arr = []
// 			arr.push(this.$refs.current.offsetTop)
// 			arr.push(this.$refs.hotcity.offsetTop)
			for (let i in this.cityList) {
				arr.push(this.$refs[this.cityList[i].title][0].offsetTop)
			}
			return arr
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
			// console.log(res)
			res && (res = res.data.data)
			if (res) {
				this.hotCity = res.hotcity
				this.cityList = res.city
			}
    },
    handleGetDataErr (res) {
       
    },
		scrollToIndex (item) {//滚动到对应element
			// console.log(this.$refs)
			this.scroll.scrollToElement(this.$refs[item][0])
		},
		bindEvents () {//绑定滚动事件
			this.scroll.on('scroll', this.handleScroll.bind(this))
		},
		handleScroll (e) {
      const y = -e.y
      let flag = false
      for (let i = 0;i<this.areaPositions.length;i++) {
          if (y > this.areaPositions[i] - 34 && y < this.areaPositions[i]) {
            // console.log('交汇')
            const diff = y-this.areaPositions[i] + 34
            console.log(diff)
            flag = true
            this.$emit('fixchange', diff)
            if (y > this.areaPositions[i] - 18 && y < this.areaPositions[i]) {
              this.$emit('changeTxt', this.cityList[i].title)
              this.$emit('changeSideBar',i)
            }else{
              if (i>0) {
                this.$emit('changeTxt', this.cityList[i-1].title)
                this.$emit('changeSideBar',i-1)
              }
            }
            break;
          }
      }
			if (y < 300) {
				this.$emit('changeSideBar',0)
			}
      !flag && this.$emit('fixchange')
			this.$emit('scroll', e)
		}
  },
  mounted () {
    this.getCityData()
    this.scroll = new BScroll(this.$refs.list, {
      probeType: 3
    })
		this.bindEvents()
		// const that = this
// 		setTimeout (function () {
// 			console.log(this.areaPositions)//undefined
// 		},3000)
// 		setTimeout (() => {
// 			console.log(this.areaPositions)//正常 箭头函数无需绑定this，箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
// 		},3000)
  },
  activated () {
    this.scroll && this.scroll.refresh()
  }
}
</script>

<style scoped>
  .wraper{overflow: hidden;}
  .item-title{
    font-size: .24rem;
    color: #333;
    padding: .24rem .3rem;
    background: #eee;
  }
  .city-container{
    font-size: .28rem;
    padding: .2rem .3rem;
    line-height: .5rem;
    box-sizing: border-box;
  }
  .item-city{
    width: 2rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    border: 1px solid #999;
    border-radius: 2px;
  }
  .now-city{
    color: #00BCD4;
    border: 1px solid #00bcd4;
  }
  .hot-item{ margin-top: .2rem;}
  .hot-container{
    display: flex;
    flex-wrap: wrap;
    padding-top: 0;
    padding-right: .5rem;
    justify-content: space-between;
  }
</style>
