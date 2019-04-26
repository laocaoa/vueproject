<template>
  <div class="download" v-show="download">
    <span class="downloadClose" @click="downloadClose">x</span>
    <img src="../../../assets/images/download.jpg" alt="下载logo" class="downloadLogo">
    <p class="downloadDec">使用去哪儿门票客户端<br/>享受专属优惠体验更流畅</p>
    <a href="#" class="download-btn">{{phoneType}}客户端</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'download',
  data () {
    return {
      phoneType: "苹果"
    }
  },
  computed: {
    ...mapState(['download'])
  },
  methods: {
    ...mapMutations(['changeDownload']),
    downloadClose () {
    	this.changeDownload(false)
    },
		judegType () {
      let ua = navigator.userAgent.toLowerCase();
      console.log(navigator.userAgent)
      if (isWeixinBrowser()) {
        console.log('微信')
      } else {
         if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            this.phoneType = "苹果"
         } else if (/(Android)/i.test(navigator.userAgent)) {
            this.phoneType = "安卓"
         }
      }
//       let reg = /(a)/g
//       if (!reg.test("wsadsasdadasdasd")) {
//         console.log('不符合')
//       }
      function isWeixinBrowser() {
          return (/micromessenger/.test(ua)) ? true : false;
      }
		}
  },
	mounted () {
		this.judegType()
	}
}
</script>

<style scoped>
  .download{
    position: fixed;
    z-index: 25;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background: rgba(0,0,0,.8);
  }
  .downloadClose{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: .5rem;
    height: .5rem;
    line-height: .4rem;
    text-indent: .1rem;
    background: #afafaf;
    border-radius: 0 0 .5rem 0;
    color: #fff;
  }
  .downloadLogo{
    position: relative;
    top: .15rem;
    left: .65rem;
    width: .7rem;
    height: .7rem;
    border-radius: .1rem;
  }
  .downloadDec{
    position: absolute;
    left: 1.6rem;
    top: .2rem;
    line-height: .32rem;
    font-size: .24rem;
    color: #fff;
  }
  .download-btn{
    position: absolute;
    display: block;
    top: .22rem;
    right: .2rem;
    width: 1.4rem;
    height: .56rem;
    line-height: .56rem;
    text-align: center;
    border: .02rem solid #1d8f96;
    border-radius: .08rem;
    font-size: .26rem;
    color: #1d8f96;
  }
</style>
