import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Classify from '@/views/Classify/index.vue';
import Shopping from '@/views/Shopping.vue';
import My from '@/views/My.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify',
        component: Classify,
      },
      {
        path: 'shopping',
        component: Shopping,
      },
      {
        path: 'my',
        component: My,
      },
    ],
  },

  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
