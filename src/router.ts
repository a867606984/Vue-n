import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home",
    },
    {
      path: "/home",
      meta: { title: "聊天" },
      component: () => import('./views/Home.vue'),
    }
  ],
});
