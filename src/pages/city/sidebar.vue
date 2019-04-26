<template>
  <div class="sidebar">
    <div class="sidebar-list" ref="list">
      <div class="sidebar-item"
			 v-for="(item, index) of cityList" 
			 @touchstart="handleTouchStart(item.title, index)"
			 @touchmove="handleTouchMove"
			 :class='selected==index?"active":""'>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-sidebar',
  props: {
    cityList: Array
  },
	data () {
		return {
			selected: -1
		}
	},
	computed: {
		areaTop () {
			return Number(this.$refs.list.offsetTop + 81)//获取元素距离顶部距离
		}
	},
  methods: {
		handleTouchStart (item, index) {
			this.$emit('changeLetter', item)
			this.selected = index
    },
		handleTouchMove (e) {
			let index = Math.floor((e.touches[0].clientY - this.areaTop) / 20)//手指滑动位置-距离顶部位置/元素高度  可知是第几个元素
			index = index<0?0:index
			index = (index>=this.cityList.length)?(this.cityList.length-1):index
			this.selected = index
			this.$emit('changeLetter', this.cityList[index].title)
		},
		handleChangeSidebar (index) {
			this.selected = index
		}
  }
}
</script>

<style scoped>
  .sidebar{
    position: absolute;
    top: 1.62rem;
    right: 0;
    bottom: 0;
    width: .4rem;
		display: flex;
		align-items: center;
    font-size: .28rem;
  }
  .sidebar-list{
    width: 100%;
    line-height: .4rem;
    text-align: center;
  }
	.active{
		color: #00bcd4;
	}
</style>
