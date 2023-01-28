export default [
  {
    path: '/index',
    name: 'index',
    component: () => import('./index.vue'),
    redirect: '/index/home',
    children: [{
      path: '/index/categories',
      name: 'categories',
      component: () => import('./categories.vue'),
      meta: { title: '文章分类', keepAlive: true }
    }].concat(
      {
        path: '/index/home',
        name: 'home',
        component: () => import('./home'),
        meta: { title: '首页', keepAlive: true }
      },
      {
        path: '/index/reading',
        name: 'reading',
        component: () => import('./reading'),
        meta: { title: '读书笔记' }
      },
      {
        path: '/index/guidelines',
        name: 'guidelines',
        component: () => import('./guidelines'),
        meta: { title: '用户协议' }
      })
  }
];
