<template>
  <div>
    <h3>Components Text</h3>
    <p href="#" v-show="disabled"> let me see see</p>
  </div>
</template>

<script>
export default {
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
  }
}

</script>
<style lang="scss"></style>