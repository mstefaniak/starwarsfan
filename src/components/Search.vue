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
import SearchResults from '@/components/SearchResults';
import debounce from 'lodash.debounce';
import localforage from 'localforage';

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

    loadMovies() {
      const request = async () => {
        const promises = [];
        const cached = await localforage.getItem('moviesList');

        if (cached !== null) {
          return cached;
        }

        for (let i = 1; i <= 7; i += 1) {
          promises.push(fetch(`https://swapi.co/api/films/${i}/`));
        }

        const responses = await Promise.all(promises)
          .then(results => results.map(result => result.json()));

        return Promise.all(responses)
          .then(data => localforage.setItem('moviesList', data));
      };

      return request();
    },

    search() {
      this.moviesSearch = this.moviesList
        .filter(movie => movie.title.toLowerCase().match(this.searchValue.toLowerCase()));
    },
  },

  created() {
    this.loading = true;
    this.loadMovies().then((data) => {
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
