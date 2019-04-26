<template>
  <div class="detail-page">
    <banner :swiperList="swiperList"></banner>
		<head-detail></head-detail>
		<base-info></base-info>
		<list :listData="listData"></list>
  </div>
</template>

<script>
import Banner from './banner'
import List from './list'
import HeadDetail from './header'
import BaseInfo from './baseinfo'
import axios from 'axios'
export default {
  name: 'detail',
  props: {
    sightId: [Number, String]
  },
  components: {
    Banner,
		List,
		HeadDetail,
		BaseInfo
  },
  data () {
    return {
      swiperList: [],
			listData: []
    }
  },
  methods: {
    getSwiperData () {
      axios.get('./api/index.json', {
        pramas: {
          
        }
      })
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      console.log(res)
      res && (res = res.data.data)
      if (res) {
        this.swiperList = res.swiperList
      }
    },
    handleGetDataErr () {
      
    },
		getListData () {
			axios.get('./api/detail.json', {
				params: {
					
				}
			})
			.then((res)=>{
				console.log(res)
				res && (res = res.data.ticketList)
				if (res) {
					this.listData = res
				}
			})
			.catch((error)=>{
				
			})
		}
  },
  watch: {
    sightId () {
      console.log(this.sightId)
      this.getSwiperData ()
			this.getListData ()
    }
  },
  created () {
    console.log(this.sightId)
    this.getSwiperData ()
		this.getListData ()
  }
}
</script>

<style>
	.detail-page{
		background: #f5f5f5;
	}
</style>
