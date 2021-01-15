<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>vue项目最小配置</h1>

      <Coms :disabled="true"/>

  </div>
</template>

<script>

import Coms from '@com/Demo.vue'

export default {
  name: 'home',
  components:{Coms}
}
</script>
<style lang="scss" >
.home{
  margin-top:50px;
  text-align: center;
  background:$mainColor;
}
</style>
