<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>vue项目最小配置</h1>

      <coms :disabled="true" @free-click="freeClick"> 
        我是普通插槽的文字
        <p slot="slot_1">我是具名插槽的文字</p>
      </coms>

  </div>
</template>

<script>

import coms from '@com/Demo.vue'

export default {
  name: 'home',
  inject:['name'],
  components:{coms},
  methods:{
    freeClick(e){
      alert(`自定义事件参数 ${e}`)
    }
  },
  created(){
    console.log('provide传递过来的数据是：',this.name)
  }
}
</script>
<style lang="scss" >
.home{
  margin-top:50px;
  text-align: center;
  background:$mainColor;
}
</style>
