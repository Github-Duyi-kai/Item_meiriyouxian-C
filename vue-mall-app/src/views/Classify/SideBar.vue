<template>
  <div class="SideBar-container" ref="sideWrapper">
    <div v-for="(item,i) in sideList"
    :key="item"
    :class="{active:index===i}"
    @touchend='touchEnd(i,$event,item)'
  @touchmove='move=true'
  @touchstart='move=false'
    >{{typeof(item)==='number'?'全部':item}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      index: 0,
      move: false,
    };
  },
  methods: {
    ...mapActions(['setGoodList']),
    touchEnd(i, item, value) {
      if (this.move) {
        return;
      }
      this.index = i;
      //   计算移动的距离,点击时跳到中间
      const wrapperHeight = (this.$refs.sideWrapper.getBoundingClientRect().top) / 2;
      const itemHeight = item.target.offsetTop + item.target.offsetHeight / 2;
      const move = itemHeight - wrapperHeight;
      this.$refs.sideWrapper.scrollTo(0, move);
      // 获取右边商品的具体内容
      console.log('type是啥', value);
      this.setGoodList({
        type: value,
        page: 1,
        sortType: 'all',
      });
    },
  },
  computed: {
    ...mapState({
      sideList: (state) => state.sideList,
    }),
  },
  mounted() {
    this.setGoodList({
      type: this.$store.state.sideList[0] && this.$store.state.sideList[0].title,
      page: 1,
      sortType: 'all',
    });
  },
};
</script>

<style lang='less' scoped>
.SideBar-container {
  width: 79px;
  background-color: rgb(240, 238, 238);
  overflow-y: auto;
  position: fixed;
  left: 0;
  bottom: 50px;
  top: 153px;
  padding-top: 7px;
  scroll-behavior: smooth;
  div {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    &.active {
      font-weight: bolder;
      background-color: #eee;
      color: #ff1a90;
      font-size: 120%;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 5px;
        height: 40px;
        background-color: #ff1a90;
      }
    }
  }
}
.SideBar-container::-webkit-scrollbar {
  width: 0;
}
</style>
