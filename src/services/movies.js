import localforage from 'localforage';

class Movies {
  static loadData() {
    const result = async () => {
      const promises = [];
      const cached = await localforage.getItem('moviesList');

      if (cached !== null) {
        return cached;
      }

      for (let i = 1; i <= 7; i += 1) {
        promises.push(fetch(`https://swapi.co/api/films/${i}/`));
      }

      const responses = await Promise.all(promises)
        .then(results => results.map(data => data.json()));

      return Promise.all(responses)
        .then(data => localforage.setItem('moviesList', data));
    };

    return result();
  }

  static getMovieById(id) {
    const result = async () => {
      const moviesList = await this.getList();

      const moviesFound = moviesList.filter(movie => +movie.episode_id === +id);

      if (moviesFound.length) {
        return moviesFound[0];
      }

      return null;
    };

    return result();
  }

  static getList() {
    const result = async () => {
      const moviesList = await this.loadData();
      return moviesList;
    };

    return result();
  }
}

export default Movies;
