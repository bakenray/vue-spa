<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>vue项目最小配置</h1>
      <ul class="row center">
        <li v-for="item in navs" :key="item.id" @click="current = item.path">{{item.name}}</li>
      </ul>

      <template v-if="current === 'slot'">
        <Slot :disabled="true" @free-click="freeClick"> 
          我是普通插槽的文字
          <p slot="slot_1">我是具名插槽的文字</p>
        </Slot>
      </template>
      <template v-else-if="current === 'public'">
        <Public/>
      </template>

  </div>
</template>

<script>

import Slot from '@com/Slot.vue'

export default {
  name: 'home',
  inject:['name'],
  components:{Slot},
  data(){
    return{
      current:'',
      navs:[
        {
          id:1,
          name:'插槽',
          path:'slot'
        },
        {
          id:2,
          name:'全局组件',
          path:'public'
        }
      ]
    }
  },
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
  >ul{
    margin:50px 0;
    >li{
      margin:10px;
      cursor: pointer;
      color:blue;
      transition: text-shadow .35s ease;
      &:hover{
        text-shadow: 0 4px 10px rgba(0,0,0,.25);
      }
    }
  }
}
</style>
