import Vue from 'vue';

const store = Vue.observable({
  movies: {},
  reviews: {},
});

export const mutations = {
  setMovies(movies) {
    movies.forEach((movie) => { store.movies[movie.episode_id] = movie; });
  },
  addReview(id, review) {
    if (!store.reviews[id]) {
      store.reviews[id] = [];
    }

    store.reviews[id].push({
      id: store.reviews[id].length,
      name: review.name || 'Anonymous',
      review: review.review,
      stars: review.stars,
    });
  },
};

export const getters = {
  getMovieById(id) {
    return store.movies[id];
  },
  searchByTitle(phrase) {
    return Object.values(store.movies)
      .filter(movie => movie.title.toLowerCase().match(phrase.toLowerCase()));
  },
  getReviews(id) {
    return store.reviews[id];
  },
};
