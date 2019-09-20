<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined');
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,800&display=swap');

@import './scss/global.scss';
@import './scss/themes.scss';
@import './scss/themify.scss';

body {
  @include themify(null, $themes) {
    background-color: theme(background)
  }
}

#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
<<<<<<< HEAD
  font-family: 'Nunito Sans', sans-serif;

=======

  font-family: 'Nunito Sans', sans-serif;
>>>>>>> f123424d6ed9e79d93823306293c0f26be7184a4
  @include themify(null, $themes) {
    background-color: theme(background);
    color: theme(color)
  }

  display: flex;
  flex-direction: column;
}
</style>
