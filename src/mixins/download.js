export default{
  activated () {
		this.showDownLoad()
  },
  methods: {
    showDownLoad () {
      throw new Error('mixins里面的生命周期会和组件中的神功周期合并，先执行mixins中的钩子函数。而方法会被组件中的方法覆盖')
    }
  }
}