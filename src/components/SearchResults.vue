<template>
  <div
    v-if="movies.length"
    class="search-results">
      <ul v-for="movie in movies" :key="movie.episode_id">
        <li>{{movie.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'movie',
  props: {
    movies: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      title: 'Search results',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
