<template>
  <div>city</div>
</template>

<script>
export default {
  name: 'city',
  mounted () {
  	console.log(this.$route.query.id)
    console.log(this.$route.params.id)
  }
}
</script>

<style>

</style>
