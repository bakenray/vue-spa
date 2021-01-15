<template>
  <div>
    <h3>Components Text</h3>
    <p href="#" v-show="disabled"> let me see see</p>
    <slot>没传插槽时，我就会显示</slot>
    <slot name="slot_1">没传插槽时，我就会显示</slot>
    <button @click="freeClick">自定义事件</button>
  </div>
</template>

<script>
export default {
  data:()=>{
    return {
      num:0
    }
  },
  props:{
    size:{
      type:String,
      default:'default'
    },
    disabled:{
      type:Boolean,
      default:false,
      require:true   //必传属性
    },
    obj:{
      type:Object,
      default:function(){  //对象或数组必须从一个工厂函数获取
        return {}  
      }
    }
  },
  methods:{
    freeClick(e){
      this.num++
      this.$emit('free-click',this.num)
    }
  }
}

</script>
<style lang="scss"></style>