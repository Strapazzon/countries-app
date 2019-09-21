<template>
  <div class="grid">
    <CardCountry 
      v-on:selected="onSelectedCountry"
      v-for="country in countries"
      :key="country.alpha3Code"
      :country="country"
    ></CardCountry>
  </div>
</template>

<script>
import CardCountry from './cardCountry';
export default {
  name: 'gridCountries',
  components:{
    CardCountry
  },
  methods: {
    onSelectedCountry(country) {
      this.$emit('showDetail', country);
    }
  },
  computed: {
    countries: {
      get() {
        return this.$store.state.countries
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 60px;
    height: 40vh;
    min-height: 100%;
    overflow: scroll;
    @media (max-width: 376px) {
      .card {
        width: 100%;
      }
    }
  }
</style>
