<template>
	<div class="header">
    <div class="title">
      <span class="back iconfont" @click="handBackClick">&#xe60e;</span>
      选择城市
    </div>
  </div>
</template>

<script>

export default {
  name: 'city-header',
  methods: {
    handBackClick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .header
    height: 44px
    line-height: 44px
    background: $bgColor
    font-size: .36rem
    text-align: center
    color: #fff
    position: relative
    z-index: 333
    .title
      .back
        position: absolute
        left: 0
        top: 0
        font-weight: bold
        width: .84rem
        font-size: .34rem
</style>
