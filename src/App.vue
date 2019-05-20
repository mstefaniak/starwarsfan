<template>
  <div id="app">
    <header>
      <img class="logo" src="https://pluspng.com/img-png/star-wars-png-black-and-white-open-2000.png" alt="Star Wars Rulez">
      <h1>A long time ago in a galaxy far, far away...</h1>
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
  margin-top: 40px;
}

header {
  margin: 0;
  height: 40vh;
  text-align: center;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.logo {
  display: block;
  margin: 0 auto;
  height: 30vh;
}
</style>
