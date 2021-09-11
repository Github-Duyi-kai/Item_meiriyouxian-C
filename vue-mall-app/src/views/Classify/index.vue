<template>
  <div class="classify-container">
    <SearchInput />
    <OneTab />
    <template v-if="!$store.state.showContent">
      <SideBar />
    </template>
    <van-loading
    type="spinner"
    color="#1989fa"
    v-else class="loading"
    size='3rem'/>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import OneTab from './OneTab.vue';
import SearchInput from './searchInput.vue';

export default {

  components: {
    SearchInput,
    OneTab,
    SideBar,
  },
};
</script>

<style lang="less" scoped>
.classify-container {
  width: 100vw;
  .loading{
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
  }
}
</style>
