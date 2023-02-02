import index from './index/index.js';

export default [
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('./post.vue')
  },
  {
    path: '/reading-note/:id',
    name: 'readingNote',
    component: () => import('./readingNote.vue')
  }
].concat(index);
