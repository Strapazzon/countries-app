<template>
  <div class="searcAndFilterBar">
    <div class="search">
      <i class="material-icons-outlined">search</i>
      <input type="text" v-model="searchCountryValue" placeholder="Search for a country">
    </div>
    <div class="filter">

    </div>
  </div>
</template>

<script>
export default {
  name: 'searcAndFilterBar',
  computed: {
    searchCountryValue: {
      get () {
        return this.$store.state.searchCountryValue
      },
      set (value) {
        this.$store.commit('changeSearchCountryValue', value)
      }
    }
  }

}
</script>

<style scoped lang="scss">
  @import '~@/scss/global.scss';

  .searcAndFilterBar {
    margin-top: 60px;
    display: flex;

    .search {
      height: 45px;
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
          &::placeholder {
            color: theme(color-secondary);
            font-weight: 300;
          }
        }
      }
    }

  }
  

</style>