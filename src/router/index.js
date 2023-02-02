import Vue from 'vue';
import App from '../App.vue';
import VueRouter from 'vue-router';
import routes from '../views';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{
    // 顶层
    path: '/',
    component: App,
    children: routes,
    redirect: 'index'
  }]
});

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
