<template>
  <div class="head" ref="head">
    <router-link to='/' class="back iconfont">&#xe60e;</router-link>
    <h1 class="head-title">国信南山温泉</h1>
  </div>
</template>

<script>
export default {
  name: "header-detail",
  data () {
    return {
			
    }
  },
  methods: {
    handldeScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop = scrollTop/150
      scrollTop = scrollTop >= 1 ? 1 : scrollTop
      this.$refs.head.style.opacity = scrollTop
    }
  },
  activated () {
    window.scroll(0, 0)
    window.addEventListener('scroll', this.handldeScroll)
    // this.handldeScroll()
  },
  deactivated () {
    console.log('移除滚动事件监听')
    window.removeEventListener('scroll', this.handldeScroll)
  }
}
</script>

<style scoped>
  .head{
    position: fixed;
    width: 100%;
    height: 44px;
    top: 0px;
    left: 0px;
    display: block;
    opacity: 0;
    background: #00bcd4;
    z-index: 91;
  }
  .back{
    left: 0;
    top: 0;
    width: .8rem;
    height: 44px;
    line-height: 44px;
    position: absolute;
    font-size: .36rem;
    display: block;
    text-align: center;
  }
  .head-title{
    overflow: hidden;
    margin: 0 1rem;
    line-height: 44px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
  }
</style>
