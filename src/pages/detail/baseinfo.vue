<template>
  <div class="container">
		<div class="flexbox">
			<div class="container-left container-item">
				<router-link to="#">
					<div class="left-info">
						<span class="score">{{4.9|toRmb}}</span>
						<span class="text">分</span>
						<span class="desc">很棒</span>
					</div>
					<p class="totalcommentnum">1155条评论</p>
					<span class="right-arrow iconfont">&#xe603;</span>
				</router-link>
			</div>
			<div class="container-right container-item">
				<router-link to="#">
					<p class="sight-title">景点介绍</p>
					<p class="open-time">开放时间、贴士</p>
					<span class="right-arrow iconfont">&#xe603;</span>
				</router-link>
			</div>
		</div>
		<div class="addressbox">
			<router-link to="#">
				<div class="addressbox-item">
					<span class="iconfont posi">&#xe647;</span>
					<span class="address-txt">吉林省长春长清公路16公里处</span>
					<span class="iconfont right-arrow">&#xe603;</span>
				</div>
			</router-link>
		</div>
  </div>
</template>

<script>
export default {
  name: "base-info",
	data () {
		return {
			
		}
	}
}
</script>

<style scoped>
  .container{
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    -webkit-border-radius: .1rem .1rem 0 0;
    -moz-border-radius: .1rem .1rem 0 0;
    border-radius: .1rem .1rem 0 0;
  }
	.flexbox{
		padding-top: .1rem;
    padding-bottom: .2rem;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
  .score{
    font-size: .44rem;
    color: #ff8300;
    line-height: .44rem;
  }
  .text{
    font-size: .28rem;
    color: #ff8300;
    line-height: .48rem;
  }
  .desc{
    font-size: .28rem;
    color: #ff8300;
    line-height: .48rem;
    margin-left: .2rem;
  }
  .totalcommentnum{
    font-size: .24rem;
    color: #9e9e9e;
    line-height: .32rem;
    margin-right: .2rem;
  }
  .left-info{
    font-size: 0;
  }
	.container-item{
		position: relative;
		width: 50%;
	}
  .right-arrow{
    color: #9e9e9e;
		position: absolute;
		right: 0;
		top: .2rem;
  }
	.container-left .right-arrow{
		right: .16rem
	}
	.container-right::before{
		content: "";
		width: 1px;
		height: 100%;
		overflow: hidden;
		border-left: 1px solid #e0e0e0;
		position: absolute;
		left: 0;
		top: 0;
		transform: scaleX(.5);
	}
	.sight-title{
		font-size: .28rem;
    color: #212121;
    line-height: .48rem;
		padding-left: .3rem;
	}
	.open-time{
		color: #9e9e9e;
    font-size: .24rem;
    padding-left: .3rem;
	}
	.addressbox{
		padding: .2rem 0;
	}
	.addressbox-item{
		padding: 0 .56rem;
		position: relative;
	}
	.addressbox-item .right-arrow{
		top: .1rem;
	}
	.address-txt{
		color: #212121
	}
	.posi{
		color: #9e9e9e;
    font-size: .4rem;
		position: absolute;
		left: 0;
		top: -.04rem;
	}
</style>
