<template>
  <div id="app">
    <NavBar></NavBar>
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
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
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
  overflow: hidden;

  @include themify(null, $themes) {
    background-color: theme(background);
    color: theme(color)
  }

  display: flex;
  flex-direction: column;
}
</style>
