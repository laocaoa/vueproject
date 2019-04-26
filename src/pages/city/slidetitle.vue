<template>
  <div class="slide-title" v-show="show" ref="title">{{txt}}</div>
</template>

<script>
export default {
  name: 'slide-title',
  data () {
    return {
      show: false,
			txt: '当前位置'
    }
  },
  methods: {
    swithShow (flag) {
      this.show = flag
    },
		setMove (diff) {
			this.$refs.title.style.top = (78 - diff) + 'px'
		},
		changeTxt (title) {
			this.txt = title
		}
  }
}
</script>

<style scoped>
  .slide-title{
    font-size: .24rem;
    position: fixed;
    top: 1.56rem;
    width: 100%;;
    z-index: 111;
    color: #333;
    padding: .24rem .3rem;
    background: #eee;
  }
</style>
