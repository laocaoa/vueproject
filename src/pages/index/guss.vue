<template>
  <div class="guss-you-like">
    <div class="guss-like-header">
      <span class="iconfont heart">&#xe78d;</span>
      <span class="title">猜你喜欢</span>
    </div>
    <ul>
      <li v-for="item of 6">
        <div class="like-img-box"><img src="http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg" alt=""></div>
        <div class="like-img-tag">随买随用</div>
        <div class="like-info">
          <div class="info-title">水奥雪世界</div>
          <div class="info-star">
            <div v-for="n of 5" class="star-box">
              <img src="../../assets/images/timg.jpg" alt="">
            </div>
            <span class="comment-num">78条评论</span>
          </div>
          <div class="info-price">
            <div class="price-left">
              <span>&yen;</span><em>9.9</em>起
            </div>
            <div class="price-right">奥林匹克公园</div>
          </div>
        </div>
      </li>
    </ul>
    <a href="#" class="check-all-product">查看所有产品</a>
  </div>
</template>

<script>
export default {
  name: 'index-guss'
}
</script>

<style lang='stylus' scoped>
  .guss-you-like
    background: #fff
    padding: 0 .24rem
    box-sizing: border-box
    .guss-like-header
      font-size: 0
      padding: .24rem 0 .26rem
      .heart
        font-size: .4rem
        color: red
        margin-right: .1rem
      .title
        color: #212121;
        font-size: .32rem
    .check-all-product
      display: block
      padding: .2rem 0
      color: #00afc7
      font-size: .28rem
      line-height: .4rem
      text-align: center
  .guss-you-like ul li
    position: relative
    padding: .2rem 0
    overflow: hidden
    .like-img-tag
      background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
      position: absolute
      top: .2rem
      left: 0
      width: 1.02rem
      height: .38rem
      background-size: 100%
      color: #fff
      font-size: .2rem
      line-height: .38rem
      text-indent: .04rem
    .like-img-box
      width: 2rem
      height: 2rem
      float: left
      img
        width: 100%
    .like-info
      padding-left: .22rem
      font-size: 0
      overflow: hidden
      .info-title
        font-size: .32rem
        margin-top: .26rem
      .info-star
        background: #fff
        margin-top: .18rem
        height: .34rem
        .star-box
          width: .23rem
          height: .23rem
          float: left
          margin-right: .03rem
          img
            width: 100%
        .comment-num
          color: #616161
          font-size: .24rem
          line-height: .28rem
          padding-left: .2rem
      .info-price
        display: flex
        justify-content: space-between
        align-items: baseline
        font-size: .24rem
        color: #616161
        margin-top: .12rem
        .price-left
          span
            color: #ff8300
          em
            font-size: .4rem
            color: #ff8300
</style>
