<template>
  <div
    v-if="movies.length"
    class="search-results">
      <ul>
        <li v-for="movie in movies" :key="movie.episode_id">
          <div>{{movie.title}}</div>
          <router-link :to="{ name: 'movie', params: { id: movie.episode_id } }">More read</router-link>
          <router-link :to="{ name: 'review', params: { id: movie.episode_id } }">Review add</router-link>
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
};
</script>
