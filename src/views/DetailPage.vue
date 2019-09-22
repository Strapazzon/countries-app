<template>
  <div class="detailPage padding">
    <div class="actions">
      <button class="ripple" v-on:click="canBack">
        <i class="material-icons">chevron_left</i>
        Back
      </button>
    </div>

    <div class="content">
      <div class="flag">
        <img :src="country.flag" :alt="country.name" />
      </div>
      <div class="detail">
        <div class="fieldName">{{ country.name }}</div>
        <div class="fieldsData">
          <div class="left">
            <div class="field"><b>Native Name: </b> {{ country.nativeName }} </div>
            <div class="field"><b>Population: </b> {{ country.population | number }} </div>
            <div class="field"><b>Region: </b> {{ country.region }} </div>
            <div class="field"><b>Sub Region: </b> {{ country.subregion }} </div>
            <div class="field"><b>Capital: </b> {{ country.capital }} </div>
          </div>
          <div class="right">
            <div class="field"><b>Top Level Domain: </b>{{ country.topLevelDomain && country.topLevelDomain[0] }}</div>
            <div class="field"><b>Currencies: </b>{{ country.currencies | arrayName }}</div>
            <div class="field"><b>Languages: </b>{{ country.languages | arrayName }}</div>
          </div>
        </div>
        <div class="borderCountries">
          Border Countries:
          <button class="ripple" v-on:click="toDetailCountry(border)" v-for="border in borders" :key="border.name">{{ border.name }}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "detailPage",
  components: {},
  methods: {
    canBack() {
      this.$router.go(-1);
    },
    toDetailCountry(country) {
      this.$router.push({ name: 'detail', params: { code: country.alpha3Code } });
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch("fetchDetailCountry", to.params.code);
    next();
  }, 
  filters:{
    arrayName(value) {
      if (!value) return

      return value.map(item=>{
        return item.name
      }).toString().replace(/,/g, ', ');
    },
    number(value) {
      if (!value) return ''
      return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 9 }).format(value);
    }
  },
  computed: {
    country: {
      get() {
        return this.$store.state.detailCountry;
      }
    },
    borders: {
      get() {
        return this.$store.state.bordersOfDetailCountry
      }
    }
  },
  mounted() {
    this.$store.dispatch("fetchDetailCountry", this.$route.params.code);
  }
};
</script>


<style scoped lang="scss">
@import "~@/scss/global.scss";

.detailPage {
  .actions {
    margin-top: 60px;
  }

  button {
    width: 100px;
    height: 35px;
    border-radius: 4px;
    box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.3);
    i {
      margin-right: 10px;
    }
    @include themify(null, $themes) {
      background-color: theme(primary);
    }
  }

  .content {
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;

    .flag {
      width: auto;
      max-width: 45%;
      min-width: 187.5px;
      img {
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .detail {
    box-sizing: border-box;
    min-width: 187.5px;
    width: 55%;
    padding: 30px 30px 30px 60px;

    .fieldName { 
      font-size: 20px;
      font-weight: 800;
    }

    .fieldsData {
      display: flex;
      flex-direction: row;
      font-size: 12px;
      margin-top: 30px;
      font-weight: 300;
      @include themify(null, $themes) {
        color: theme(color-seconday);
      }
      .field{
        line-height: 30px;
        font-size: 16px;
        b {
          font-weight: 600;
        }
      }
      
      .left {
        width: 50%;
      }
      .right {
        width: 50%
      }
    }

    .borderCountries {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      button {
        margin-left: 10px;
        width: auto;
        height: 20px;
        font-size: 12px;
        margin-bottom: 10px;
        padding: 0px 10px;
      }
    }
  }
}
  @media (max-width: 375px) {
    .detailPage{
      overflow: auto !important;
      padding-bottom: 100px;
    }

    .content {
      flex-direction: column;
      .flag {
        width: 100%;
        max-width: none;
      }
      .detail {
        width: 100%;
        padding: 0px;
        margin-top: 20px;

        .fieldsData {
          flex-direction: column;
        }
      }
    }  
  }
</style>
