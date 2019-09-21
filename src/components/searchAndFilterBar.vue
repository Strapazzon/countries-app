<template>
  <div class="searcAndFilterBar">
    <div class="search">
      <i class="material-icons-outlined">search</i>
      <input type="text" v-model="searchCountryValue" placeholder="Search for a country">
    </div>
    <div class="filter">
      <CustomSelect :options="optionsFilter" v-model="filterRegion" placeholder="Filter by Region"></CustomSelect>
    </div>
  </div>
</template>

<script>
import CustomSelect from './customSelect';
export default {
  name: 'searcAndFilterBar',
  components:{
    CustomSelect
  },
  data() {
    return {
      optionsFilter: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    }
  },
  computed: {
    searchCountryValue: {
      get () {
        return this.$store.state.searchCountryValue
      },
      set (value) {
        this.$store.commit('changeSearchCountryValue', value)
        if (value && value.length >= 3) {
          this.$store.dispatch('fetchCountries', `name/${value.toLowerCase()}`);
        } else if (!value || !value.length) {
          this.$store.dispatch('fetchCountries', `all`);
        }
      }
    },

    filterRegion: {
      get () {
        return this.$store.state.filterRegion
      },
      set (value) {
        this.$store.commit('changeFilterRegion', value)
        if (value) {
          this.$store.dispatch('fetchCountries', `region/${value.toLowerCase()}`);
        }
      }
    }
  }

}
</script>

<style scoped lang="scss">
  @import '~@/scss/global.scss';

  .searcAndFilterBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .search {
      height: 45px;
      margin-top: 60px;
      width: 300px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 0px 20px;
      box-shadow: 0px 0px 4px -1px rgba(0,0,0,0.23);
      @include themify(null, $themes) {
        background-color: theme(primary);
        i {
          color: theme(color-secondary);
          font-size: 20px;
        }

        input {
          background-color: transparent;
          border: none;
          margin-left: 15px;
          width: 100%;
          height: 20px;
          font-size: 14px;
          color: theme(color-secondary);
          user-select: none;
          &::placeholder {
            color: theme(color-secondary);
            font-weight: 300;
          }
        }
      }
    }

    .filter {
      @include themify(null, $themes) {
        margin-top: 60px;
        background-color: theme(primary);
        border-radius: 6px;
        box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.23);
        font-size: 14px;
        height: 45px;
        border-radius: 6px;
      }
    }

  }
  

</style>