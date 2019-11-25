<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'rootPage',
  created(){
    this.$api.getData().then((res)=>{
      console.log('res',res)
    })
  }
}
</script>

<style lang="scss" scoped></style>
