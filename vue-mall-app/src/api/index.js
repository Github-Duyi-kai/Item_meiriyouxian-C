import Axios from 'axios';
import baseURL, { URLs } from './URLS';

// const appkey = 'hjk_1628173935128';
const appkey = 'dd_1597654682810';

const instance = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});
instance.interceptors.response.use((value) => value.data);

// 1、获取二级导航 请求方法： GET 请求路径：/getsidebar 请求参数：type，获取对应一级导航的二级导航
const getsidebar = (type) => instance.get(URLs.getSideBar, {
  params: { type },
});
const getGoodsList = (type, page, size, sort = 'all') => instance.get(URLs.getGoodsList, {
  params: {
    type, page, size, sort,
  },
});
export default {
  getsidebar, // 获取侧边栏数据
  getGoodsList, // 获取右侧商品的全部数据或全部商品数据
};
