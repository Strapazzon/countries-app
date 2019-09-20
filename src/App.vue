<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined');
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,800&display=swap');

#app {
  font-family: 'Nunito Sans', sans-serif;
  
}
</style>
