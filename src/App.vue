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
  },
  computed: {
    darkMode(){
      return this.$store.state.darkMode
    }
  },
  watch: {
    darkMode(newValue) {
      if (newValue) {
        document.body.className = 'dark';
      } else {
        document.body.className = 'light';
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/scss/global.scss';

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
