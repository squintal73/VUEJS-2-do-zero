import Vue from 'vue';
import VueRouter from 'vue-router';
import GithubIssue from '@/components/GithubIssue.vue';
import Cadastro from '@/components/Cadastro.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'githubissue',
    component: GithubIssue,
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
