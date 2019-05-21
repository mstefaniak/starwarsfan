import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import Movie from '@/components/Movie';
import ReviewForm from '@/components/ReviewForm';
import Reviews from '@/components/Reviews';

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
    }, {
      path: '/review/:id',
      name: 'review',
      component: ReviewForm,
    }, {
      path: '/reviews',
      name: 'reviews',
      component: Reviews,
    },
  ],
});
