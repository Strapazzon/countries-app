<template>
  <div id="app">
    <NavBar></NavBar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/navBar';

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import '~@/scss/global.scss';

body {
  @include themify(null, $themes) {
    background-color: theme(background)
  }
}

#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family: 'Nunito Sans', sans-serif;

  @include themify(null, $themes) {
    background-color: theme(background);
    color: theme(color)
  }

  display: flex;
  flex-direction: column;
}
</style>
