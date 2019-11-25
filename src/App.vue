<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {getTestData} from './services/moduleA'

export default {
  name: 'rootPage',
  created(){
    getTestData().then((res)=>{
      console.log('res',res)
    })
    console.log('getTestData', getTestData)
  }
}
</script>

<style lang="scss" scoped></style>
