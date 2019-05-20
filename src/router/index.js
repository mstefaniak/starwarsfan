import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import Movie from '@/components/Movie';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    }, {
      path: '/movie/*',
      name: 'Movie',
      component: Movie,
    },
  ],
});
