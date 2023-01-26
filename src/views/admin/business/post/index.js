export default [
  {
    path: '/admin/editor/post/:id?',
    name: 'postEdit',
    component: () => import('./postEdit'),
    meta: { title: '博客编辑' }
  },
  {
    path: '/admin/editor/draft/:draftId?',
    name: 'draft',
    component: () => import('./postEdit')
  },
  {
    path: '/admin/post/:category?',
    name: 'post-list',
    component: () => import('./postList'),
    meta: { title: '文章管理' }
  }
];
