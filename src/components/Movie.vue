<template>
  <div class="movie">
    <h2>{{ movie.title }}</h2>
    <h3>Episode {{romanNumbers[movie.episode_id]}}</h3>

    <button
      class="btn btn-back__primary movie-back"
      @click="goBack">Back go</button>

    <div class="movie-details">
      <div class="movie-details-row">
        <label>Producer:</label>
        <span>{{movie.producer}}</span>
      </div>
      <div class="movie-details-row">
        <label>Director:</label>
        <span>{{movie.director}}</span>
      </div>
      <div class="movie-details-row">
        <label>Release date:</label>
        <span>{{movie.release_date}}</span>
      </div>
      <div class="movie-details-row">
        <label>Opening crawl:</label>
        <span>{{movie.opening_crawl}}</span>
      </div>
      <div class="movie-details-row">
        <label>Reviews:</label>
        <ul v-if="reviews">
          <li v-for="review in reviews" :key="review.id">
            <review :review="review" />
          </li>
        </ul>
        <div v-else>No reviews found.</div>
      </div>
      <div class="movie-details-row">
        <router-link :to="{ name: 'review', params: { id: $route.params.id } }">
          <button class="btn">Review add</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getters } from '@/store';
import Review from '@/components/Review';

export default {
  name: 'movie',
  data() {
    return {
      romanNumbers: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII' },
      movie: getters.getMovieById(this.$route.params.id),
      reviews: getters.getReviews(this.$route.params.id),
    };
  },
  components: { Review },
  methods: {
    goBack() {
      return window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },
  },
};
</script>

<style>
  label {
    display: block;
    margin-bottom: 0.5em;
    font-size: 0.9em;
    font-weight: bold;
  }

  .movie-details-row {
    margin: 0.5em 0;
  }
</style>
