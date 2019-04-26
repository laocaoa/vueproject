<template>
  <div class="list-container">
		<div :class="flag==3?'fixed-tabbar':'list-tabbar'">
			<div class="tabbar-item item-left">
				<div :class="check?'active':''" @click="handleTabbar(true)">门票</div>
			</div>
			<div class="tabbar-item">
				<div :class="check?'':'active'" @click="handleTabbar(false)">一日游</div>
			</div>
		</div>
		<div class="list-ticket" ref="ticket">{{listData}}{{listData}}</div>
		<div class="list-comment"></div>
	</div>
</template>

<script>
export default {
  name: 'list-detail',
  props: {
    listData: Array,
    default: 3//默认值
  },
  data () {
    return {
      check: true,
      flag: 0,
      offtop: 0,
			// test: 'abcd'
    }
  },
//   filters: {//过滤器
//     Upper (value) {
//       return value.toUpperCase()
//     },
//     Lower: function (value) {
//       return value.toLowerCase()
//     }
//   },
  watch: {
  	listData () {
  		console.log(this.listData)
  	},
  	check () {
  		
  	}
  },
  methods: {
    handleTabbar (arg) {//tabbar点击事件
			this.check = arg
      this.flag = 3
      window.scrollTo(0, this.offtop)
		},
    bindEvents () {//绑定滚动事件
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll (e) {//滚动事件
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      if (scrollTop>=this.offtop) {
        this.flag = 3
      }else{
        this.flag = 0
        this.check = true
      }
    }
  },
  mounted () {
    this.bindEvents()
    this.offtop = this.$refs.ticket.offsetTop - 134
    console.log(this.offtop)
  }
}
</script>

<style scoped>
	.list-container{
		background: pink;
	}
	.list-tabbar{
		display: flex;
	}
	.tabbar-item{
		width: 50%;
		height: 46px;
		text-align: center;
		font-size: .32rem;
		color: #212121;
		line-height: 46px;
    background: #fff;
    position: relative;
	}
	.fixed-tabbar{
		position: fixed;
		top: 44px;
    left: 0;
    right: 0;
    display: flex;
    z-index: 100;
	}
	.normal{
		width: 1.4rem;
		margin: 0 auto;
	}
	.active{
		width: 1.4rem;
		margin: 0 auto;
		border-bottom: 2px solid #00bcd4;
	}
  .item-left::after{
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    -moz-transform: scaleX(0.5);
    -webkit-transform: scaleX(0.5);
    -o-transform: scaleX(0.5);
    transform: scaleX(0.5);
    border-right: 1px solid #ddd;
  }
</style>
