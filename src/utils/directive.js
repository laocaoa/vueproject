import Vue from 'vue'
//自定义过滤器
Vue.filter('toRmb', function (value) {//全局过滤器给数字加导乐符
  return `￥${value}`
})
Vue.filter('readmore', function (value,length,suffix) {//带参数的过滤器
	console.log(arguments);
  return value.substr(0,length) + suffix;
})


//自定义指令
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
