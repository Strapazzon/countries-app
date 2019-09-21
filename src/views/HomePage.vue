<template>
  <div class="homePage">
    <SearcAndFilterBar></SearcAndFilterBar>

  </div>
</template>

<script>
import SearcAndFilterBar from '@/components/searchAndFilterBar.vue';
export default {
  name: 'homePage',
  components: {
    SearcAndFilterBar
  }
}
</script>


<style scoped lang="scss">
  .homePage {
    padding: 0px 60px;
  }

</style>
