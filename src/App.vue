<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {Other} from './common/index'

export default {
  name: 'rootPage',
  provide:{
    name:'Bakenray'
  },
  created(){
// 获取数据
    this.$api.getData().then((res)=>{
      console.log('res',res)
    })

//调用公有方法
    Other.globalFun() 
  }
}
</script>

<style lang="scss" scoped></style>
