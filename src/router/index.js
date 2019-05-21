import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import Movie from '@/components/Movie';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    }, {
      path: '/movie/:id',
      name: 'movie',
      component: Movie,
    },
  ],
});
