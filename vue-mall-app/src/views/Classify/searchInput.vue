<template>
  <div class="searchInput-container">
    <van-search
      :value="value"
      input-align="center"
      placeholder="苹果特价1元1斤"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>

<style>
</style>
