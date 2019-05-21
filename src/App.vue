<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'search' }">
        <img class="logo" src="https://pluspng.com/img-png/star-wars-png-black-and-white-open-2000.png" alt="Star Wars Rulez">
      </router-link>

      <h1>A long time ago in a galaxy far, far away...</h1>

      <nav class="menu">
        <router-link :to="{ name: 'search' }">Home</router-link>
        <router-link :to="{ name: 'reviews' }">My reviews</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
}

h1 {
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin: 0 2em 5em;
}

header {
  margin: 0;
  height: 42vh;
  padding-top: 20px;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto;
  height: 25vh;
}

.menu {
  margin: 1em auto;
}

.menu a {
  margin: 0 2em;
}

.btn {
  border: none;
  background-color: #336699;
  padding: 0.5em 1em;
  color: white;
  cursor: pointer;
  min-width: 100px;
}

.btn-submit {
  background-color: #c00;
}

.btn-back__secondary {
  margin: 1em 0;
}
</style>
