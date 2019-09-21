<template>
  <div class="homePage padding">
    <SearcAndFilterBar></SearcAndFilterBar>
    <GridCountries v-on:showDetail="showDetail" ></GridCountries>

  </div>
</template>

<script>
import SearcAndFilterBar from '@/components/searchAndFilterBar.vue';
import GridCountries from '@/components/gridCountries.vue'
export default {
  name: 'homePage',
  components: {
    SearcAndFilterBar,
    GridCountries
  },
  mounted() {
    this.$store && this.$store.dispatch('fetchCountries', 'all');
  },
  methods: {
    showDetail(country) {
      this.$router.push({ name: 'detail', params: { code: country.alpha3Code } });
    }
  }
}
</script>


<style scoped lang="scss">

</style>
