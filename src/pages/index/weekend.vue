<template>
  <div>
    <h2>周末去哪儿</h2>
    <div class="weekend-item" v-for="item of 5">
      <div class="item-img-box">
        <img src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt="">
      </div>
      <div class="item-info">
        <p class="info-name">京城周末撒欢</p>
        <p class="info-desc">在帝都过周末，不仅仅是城中游!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-weekend'
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
</style>
