<template>
  <div class="scroll_container">
    <div class="scroll_header">
      <div class="header_left">
        <span class="iconfont fire">&#xe60f;</span>
        <span class="header_name">本周热门榜单</span>
      </div>
      <p class="check_all_list">全部榜单></p>
    </div>
    <ul>
      <li>
        <div class="tour_img">
          <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price"><span>￥<em>5</em></span>起</div>
      </li>
      <li>
        <div class="tour_img">
        	<img src="http://img1.qunarzz.com/sight/p0/1712/71/71ace1aa7d971212a3.water.jpg_250x250_f35a11db.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price">
        	<span>
        		￥<em>5</em>
        	</span>
        	起
        </div>
      </li>
      <li>
        <div class="tour_img">
        	<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price">
        	<span>
        		￥<em>5</em>
        	</span>
        	起
        </div>
      </li>
      <li>
        <div class="tour_img">
        	<img src="http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price">
        	<span>
        		￥<em>5</em>
        	</span>
        	起
        </div>
      </li>
      <li>
        <div class="tour_img">
        	<img src="http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_250x250_7b67daa3.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price">
        	<span>
        		￥<em>5</em>
        	</span>
        	起
        </div>
      </li>
      <li>
        <div class="tour_img">
        	<img src="http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_250x250_d9efbb7a.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price">
        	<span>
        		￥<em>5</em>
        	</span>
        	起
        </div>
      </li>
      <li>
        <div class="tour_img">
        	<img src="http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_250x250_ecfa0df2.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price">
        	<span>
        		￥<em>5</em>
        	</span>
        	起
        </div>
      </li>
      <li>
        <div class="tour_img">
        	<img src="http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg" alt="">
        </div>
        <div class="scenic_spot">故宫</div>
        <div class="tour_price">
        	<span>
        		￥<em>5</em>
        	</span>
        	起
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index-hot',
  mounted () {

  }
}
</script>

<style scoped>
  .ceshi{
    overflow: hidden;
    background: pink;
  }
  .scroll_container{
    background: #fff;
  }
  .scroll_container ul{
    overflow-x: scroll;
    white-space: nowrap;
    padding: 0 .24rem;
    font-size: 0;
  }
  .scroll_container ul li{
    text-align: center;
    margin-right: .12rem;
    display: inline-block;
  }
  .scroll_container ul li:last-child{
  	margin-right: 0;
  }
  .tour_img{
    width: 2rem;
    height: 0;
    padding-bottom: 2rem;
    overflow: hidden;
  }
  .tour_img img{
    width: 100%;
  }
  .scenic_spot{
    margin-top: .12rem;
    color: #212121;
    font-size: .24rem;
    line-height: .32rem;
  }
  .tour_price{
    color: #616161;
    font-size: .24rem;
    line-height: .36rem;
    text-align: center;
  }
  .tour_price span{
    color:#ff8300;
  }
  .tour_price span em{
    font-size: .28rem;
  }
  .scroll_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .24rem .24rem .26rem;
  }
  .fire{
    color: red;
    font-size: .4rem;
    margin-right: 0.08rem;
  }
  .header_left{
    display: flex;
	align-items: flex-end;
  }
  .header_name{
    color: #212121;
    font-size: .32rem;
  }
  .check_all_list{
    color: #616161;
    font-size: .24rem;
    align-items: center;
  }
</style>
