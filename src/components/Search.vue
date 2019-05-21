<template>
  <div class="search">
    <p v-if="loading">Please wait, loading movies...</p>
    <input
      v-else
      class="search-input"
      type="text"
      v-model="searchValue"
      @input="onInputChange"
      placeholder="Type what looking for are you" />
    <search-results :movies="moviesSearch" />
  </div>
</template>

<script>
import Movies from '@/services/movies';
import SearchResults from '@/components/SearchResults';
import debounce from 'lodash.debounce';

export default {
  name: 'search',
  data() {
    return {
      loading: false,
      moviesList: [],
      moviesSearch: [],
      searchValue: '',
      test: '',
    };
  },
  components: { SearchResults },
  methods: {
    onInputChange() {
      debounce(this.search.bind(this), 500)();
    },

    search() {
      this.moviesSearch = this.moviesList
        .filter(movie => movie.title.toLowerCase().match(this.searchValue.toLowerCase()));
    },
  },

  created() {
    this.loading = true;
    Movies.getList().then((data) => {
      this.moviesList = data;
      this.loading = false;
    });
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.search-input {
  width: 70%;
  max-width: 400px;
  height: 40px;
  line-height: 40px;
  padding: 0 1em;
}

a {
  color: #35495E;
}
</style>
