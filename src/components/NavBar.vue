<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link class="nav-list-item active" to="home">
        <span>首页</span>
      </router-link>
      <router-link class="nav-list-item" to="category">
        <span>分类</span>
      </router-link>
      <router-link class="nav-list-item" to="cart">
        <span>购物车</span>
      </router-link>
      <router-link class="nav-list-item" to="user">
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>


<style lang="less" scoped>
@import '../common/style/mixin';
.nav-bar {
  position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 5px 0;
      z-index: 1000;
      background: #fff;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
        .nav-list {
            width: 100%;
            display: flex;
            flex-direction: row;
            padding: 0;
        }
        .nav-list-item {
          display: flex;
          flex: 1;
          flex-direction: column;
          text-align: center;
          color: #666;
           &.router-link-active {
            color: @primary;
          }
          i {
            text-align: center;
            font-size: 22px;
          }
          span{
            font-size: 12px;
          }
        }
}
</style>