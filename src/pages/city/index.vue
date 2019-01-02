<template>
	<div class="scroller" ref="lala">
		<ul class="content">
			<li>1</li>
			<li>2</li>
			<li>1</li>
			<li>2</li>
			<li>1</li>
			<li>2</li>
			<li>1</li>
			<li>2</li>
			<li>1</li>
			<li>2</li>
			<li>1</li>
			<li>2</li>
			<li>1</li>
			<li>2</li>
		</ul>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'city',
  mounted () {
  	console.log(this.$route.query.id)
    console.log(this.$route.params.id)
		this.scroll = new BScroll(this.$refs.lala)
  }
}
</script>

<style>
	.scroller{
		height: 200px;
		overflow: hidden
	}
	.content li{
		height: .6rem;
		font-size: 12px
	}
</style>
