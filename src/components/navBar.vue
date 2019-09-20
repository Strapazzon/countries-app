<template>
  <div class="navbar">
    <h1>teste</h1>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  components:{

  }
}
</script>

<style scoped lang="scss">
  @import '~@/scss/global.scss';
  
  .navbar{
    @include themify(null, $themes) {
      background-color: theme(primary);
      
    }
  }
</style>
