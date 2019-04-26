<template>
  <div>
    <div class="price-desc">
      <span>!</span>
      <div class="price-desc-info">
        <span class="info-heightLight">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>
    <div class="main-nav">
      <ul>
        <li v-for="item of 4">
          <span class="iconfont item-logo">&#xe654;</span>
          <span class="title">机票</span>
        </li>
      </ul>
    </div>
    <ul class="footer-nav">
      <li>
        <a href="#">登陆</a>
      </li>
      <li>
        <a href="#">我的订单</a>
      </li>
      <li>
        <a href="#">最近浏览</a>
      </li>
      <li>
        <a href="#">关于我们</a>
      </li>
    </ul>
    <ul class="mobile-pc">
      <li>触屏版</li>
      <li>电脑板</li>
    </ul>
    <div class="copyright">cmy京ICP备05021087意见反馈</div>
  </div>
</template>

<script>
export default {
  name: 'index-footer'
}
</script>

<style lang="stylus" scoped>
  .price-desc
    margin-top: .1rem
    padding: .14rem .1rem
    font-size: .24rem
    line-height: .32rem
    background: #fff
    color: #616161
    .price-desc-info
      font-size: .24rem
      display: inline
      .info-heightLight
        font-weight: bold
  .main-nav
    ul
      // position: relative
      width: 300px
      height: 25px
      margin: 0 auto
      padding: 10px 10px 0 10px
      overflow: hidden
      display: flex
      flex-wrap: wrap
      li
        font-size: 0
        width: 25%
        display: flex
        justify-content: center
        .title
          font-size: 12px
          color: #9e9e9e
        .item-logo
          margin: 0 4px 0 0
  .footer-nav
    width: 100%
    height: 39px
    border-bottom: 1px solid #cacaca
    display: flex
    justify-content: space-between
    padding: 0 .3rem
    box-sizing: border-box
    align-items: center
    li
      font-size: 0
      a
        color: #25a4bb;
        font-size: 14px;
  .mobile-pc
    text-align: center
    font-size: 0
    padding-top: 10px
    line-height: 1
    li
      font-size: 14px
      display: inline-block
      margin: 0 15px
  .copyright
    color: #9e9e9e
    text-align: center
    font-size: 14px
    padding: 10px
    line-height: 1
</style>
