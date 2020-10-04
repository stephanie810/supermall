<template>
  <TabBar>
  <TabBarItem>
    <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
    <img slot="item-icon-active" src="../../../assets/img/tabbar/home.svg" alt="">
    <div slot="item-text">首页</div>
  </TabBarItem>
</TabBar>

  <TabBar>
    <TabBarItem>
      <img slot="item-icon" src="../../../assets/img/tabbar/Category.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/Category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
  </TabBar>

  <TabBar>
    <TabBarItem>
      <img slot="item-icon" src="../../../assets/img/tabbar/Cart.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/Cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
  </TabBar>

  <TabBar>
    <TabBarItem>
      <img slot="item-icon" src="../../../assets/img/tabbar/Profile.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/Profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBarItem from '../../common/tabbar/TabBarItem'
  import TabBar from '../../common/tabbar/TabBar'

  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>