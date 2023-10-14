<template>
  <div class="category-box">
    <header class="category-header wrap">
      <i class="nbicon nbfanhui"></i>
      <div class="header-search">
        <i class="nbicon nbSearch"></i>
        <router-link tag="span" class="search-title" to="./product-list?from=category">全场50元起步</router-link>
      </div>
      <i class="nbicon nbmore"></i>
    </header>
  </div>
</template>


<script setup>
import { reactive,  onMounted   } from 'vue'
// import { getCategory} from '@/service/good'
const state = reactive({  
  category: []
})

onMounted(async() => {
  // const {data} = await getCategory()
  state.category = data 
})


</script>

<style lang="less" scoped>
@import '../common/style/mixin';
  .category-header {
    .wh(100%, 50px);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    .fj();
    padding: 0 15px;
    line-height: 53px;
    box-sizing: border-box;

  }
  .header-search {
        display: flex;
        align-content: center;
        width: 80%;
        height: 30px;
        line-height: 30px;
        margin: 10px 0;
        color: #232326;
        background: #F7F7F7;
        border-radius: 20px;
  }
  .search-title {
    flex: 1;
    font-size: 10px;
    color: #232326;
    padding: 0 10px;
    border-radius: 20px;
    background: #F7F7F7;
    margin-left: 10px;
  }
  .nbicon {
    font-size: 20px;
    color: #232326;
  }

</style>