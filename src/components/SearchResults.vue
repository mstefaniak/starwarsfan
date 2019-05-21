<template>
  <div
    v-if="movies.length"
    class="search-results">
      <ul v-for="movie in movies" :key="movie.episode_id">
        <li>
          <div>{{movie.title}}</div>
          <router-link :to="{ name: 'movie', params: { id: movie.episode_id } }">More read</router-link>
        </li>
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

<style>

</style>
