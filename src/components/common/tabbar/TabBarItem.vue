<template>
  <div class="tab-bar-item" @click = itemClick>
    <div><slot name="item-icon"></slot></div>
    <div><slot name="item-icon-active"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

</style>