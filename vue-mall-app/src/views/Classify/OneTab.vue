<template>
  <ul class="OneTab-container" ref="wrapper">
    <li
      class="OneTab-Item"
      v-for="(item,i) in menuList"
      :key="item.title"
      :class="{active:index==i}"
      @touchend="touchEnd($event,i)"
      @touchstart="move=false"
      @touchmove="move=true"
      ref="li"
    >
      <img :src="item.imgURL" :alt="item.title" />
      <p>{{ item.title }}</p>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      index: 0,
      move: false,
      menuList: [
        {
          title: '时令水果',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg',
        },
        {
          title: '酒水冲调',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg',
        },
        {
          title: '安心乳品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg',
        },
        {
          title: '休闲零食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg',
        },
        {
          title: '肉蛋食材',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg',
        },
        {
          title: '新鲜蔬菜',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg',
        },
        {
          title: '熟食餐饮',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg',
        },
        {
          title: '海鲜水产',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg',
        },
        {
          title: '粮油调味',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg',
        },
        {
          title: '某手美食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg',
        },
        {
          title: '纸杯清洁',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg',
        },
        {
          title: '个人护理',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg',
        },
        {
          title: '美妆护肤',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg',
        },
        {
          title: '家居收纳',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg',
        },
        {
          title: '家用电器',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg',
        },
        {
          title: '3C数码',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg',
        },
        {
          title: '母婴用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg',
        },
        {
          title: '鲜花绿植',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg',
        },
        {
          title: '宠物用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg',
        },
        {
          title: '图书玩具',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg',
        },
        {
          title: '手表配饰',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['setSideList']),
    touchEnd(e, i) {
      // 当鼠标点击并移动时，不触发这个方法
      if (this.move) {
        return;
      }
      this.index = i;
      //   计算移动的距离
      console.log(e.target);
      const ItemWidth = e.target.offsetWidth;
      const ItemLeft = e.target.offsetLeft;
      const boxWidth = this.$refs.wrapper.offsetWidth / 2;
      console.log(ItemWidth, ItemLeft, boxWidth);
      const Move = ItemWidth + ItemLeft - boxWidth;
      this.$refs.wrapper.scrollTo(Move - 60, 0);
      //   获取侧边栏的数据
      this.setSideList(this.menuList[i].title);
    },
  },
  mounted() {
    this.setSideList(this.menuList[0].title);
  },
};
</script>

<style lang="less" scoped>
.OneTab-container {
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  overflow: scroll;
  text-decoration: none;
  padding: 5px;
  scroll-behavior: smooth;
  .OneTab-Item {
    width: 70px;
    height: 70%;
    margin: -30px 15px 0px 0px;
    img {
      width: 50px;
      height: 50px;
      text-align: center;
      padding: 5px;
      border: 5px solid white;
      border-radius: 46px;
      background-color: #fff;
    }
    p {
      margin: 0;
      text-align: center;
      padding: 0.5px 1.5px;
    }
    &.active {
      img {
        border-color:  #d13193;
      }
      p {
        color: white;
        background-color: #d13193;
        border-radius: 30px;
      }
    }
  }
}
.OneTab-container::-webkit-scrollbar{
     width: 0;
}
</style>
