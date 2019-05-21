<template>
  <div
    class="reviews">
      <h3>My Reviews</h3>
      <ul v-for="movie in movies" :key="movie.episode_id">
        <li v-if="getReviews(movie.episode_id)">
          <div class="reviews-movie-title">{{movie.title}}</div>
          <ul>
            <li v-for="review in getReviews(movie.episode_id)" :key="review.id">
              <review :review="review" />
            </li>
          </ul>
        </li>
      </ul>
  </div>
</template>

<script>
import { getters } from '@/store';
import Review from '@/components/Review';

export default {
  name: 'reviews',
  data() {
    return {
      movies: [],
    };
  },
  components: { Review },
  methods: {
    getReviews: getters.getReviews,
  },
  created() {
    this.movies = getters.getMovies();
  },
};
</script>

<style>
  .reviews-movie-title {
    font-weight: bold;
    color: #336699;
  }
</style>
