<template>
  <div class="movie">
    <h2>{{ movie.title }}</h2>
    <h3>Episode {{romanNumbers[movie.episode_id]}}</h3>

    <button
      class="btn btn-back__primary movie-back"
      @click="goBack">Go back</button>

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
            <i>{{review.name}}</i> gave <strong>{{review.stars}}/5</strong> note and said: {{review.review}}
          </li>
        </ul>
        <div v-else>
          <p>No reviews for now.</p>
          <p>You can add your review
            <router-link :to="{ name: 'review', params: { id: $route.params.id } }">here</router-link>
          </p>
        </div>
      </div>
    </div>
    <button
      class="btn btn-back__secondary movie-back"
      @click="goBack">Go back</button>
  </div>
</template>

<script>
import { getters } from '@/store';

export default {
  name: 'movie',
  data() {
    return {
      romanNumbers: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII' },
      movie: getters.getMovieById(this.$route.params.id),
      reviews: getters.getReviews(this.$route.params.id),
    };
  },
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
    margin: 1em 0 0.5em;
    font-size: 0.9em;
    font-weight: bold;
  }
</style>
