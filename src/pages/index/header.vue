<template>
  <div class="header">
    <div class="back iconfont">&#xe60e;</div>
    <div class="search">
      <span class="iconfont search_font">&#xe60b;</span>请输入城市/景点/游玩主题
    </div>
		<router-link to="/city">
				<div class="city">{{city}}</div>
		</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index-header',
	computed: {
		...mapState(['city'])
	}
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .header
    display: flex
    height: .88rem
    background: $bgColor
    line-height: .88rem
    color: #fff
    font-size: .28rem
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
    .search
      flex: 1
      height: .6rem
      background: #fff
      padding-left: .2rem
      margin: .14rem .2rem
      color: #919191
      line-height: .6rem
      border-radius: .06rem
      .search_font
        position: relative
        top: .5px
        padding-right: .1rem
        font-size: .3rem
    .city
      padding-right: .56rem
      position: relative
      &:before
        position:absolute
        top: .38rem
        right: .24rem
        content: "\0020"
        width: 0
        height: 0
        border-left: .14rem solid transparent
        border-right: .14rem solid transparent
        border-top: .14rem solid #fff
</style>
