<template>
  <div class="guss-you-like">
    <div class="guss-like-header">
      <span class="iconfont heart">&#xe78d;</span>
      <span class="title">猜你喜欢</span>
    </div>
    <ul>
      <li>
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
          <div class="like-price"></div>
        </div>
      </li>
    </ul>
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
  .guss-you-like ul li
    position: relative
    padding: .2rem 0
    overflow: hidden
    display: flex
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
      height: 2rem/
      img
        width: 100%
    .like-info
      padding-left: .22rem
      font-size: 0
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
</style>
