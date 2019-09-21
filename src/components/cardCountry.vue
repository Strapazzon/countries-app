<template>
  <div class="card" v-on:click="onSelected">
    <div class="image">
      <img :src="country.flag" :alt="country.name">
    </div>
    <div class="content">
      <div class="name">{{country.name}}</div>
      
      <div class="infoField"><b>Population: </b>{{country.population | number}}</div>
      <div class="infoField"><b>Region: </b>{{country.region}}</div>
      <div class="infoField"><b>Capital: </b>{{country.capital}}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'cardCountry',
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSelected() {
      this.$emit('selected', this.country);
    }
  },
  filters: {
    number (value) {
      if (!value) return ''
      return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(value);
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/scss/global.scss';

  .card {
    cursor: pointer;
    user-select: none;
    border-radius: 4px;
    width: 200px;
    height: 280px;
    overflow: hidden;
    margin-bottom: 30px;
    @include themify(null, $themes) {
      background-color: theme(primary) !important;
    }


    img {
      width: 100%;
      height: 135px;
      object-fit: cover;
    }

    .content {
      padding: 20px 15px;
      .name {
        font-size: 14px;
        margin-bottom: 10px;
      }

      .infoField {
        font-size: 10px;
        font-weight: 400;
        b {
          font-weight: 600;
        }
      }

    }
  }

</style>