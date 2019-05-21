<template>
  <div class="movie">
    <h2>{{ movie.title }}</h2>
    <h3>Episode {{romanNumbers[movie.episode_id]}}</h3>

    <button
      class="movie-back movie-back__primary"
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
    </div>
    <button
      class="movie-back movie-back__secondary"
      @click="goBack">Go back</button>
  </div>
</template>

<script>
import Movies from '@/services/movies';

export default {
  name: 'movie',
  data() {
    return {
      romanNumbers: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII' },
      movie: {},
    };
  },
  methods: {
    goBack() {
      return window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },
  },
  created() {
    Movies.getMovieById(this.$route.params.id).then((movie) => { this.movie = movie; });
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

  .movie-back {
    border: none;
    background-color: #336699;
    padding: 0.5em 1em;
    color: white;
    cursor: pointer;
  }

  .movie-back__secondary {
    margin: 1em 0;
  }
</style>
