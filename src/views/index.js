import index from './index/index.js';
import login from './login';
import admin from './admin';

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
].concat(index, login, admin);
