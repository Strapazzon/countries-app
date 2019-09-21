<template>
  <div class="navbar">
    <div class="title">
      Where in the wolrd?
    </div>
    <div class="actions">
      <button v-on:click="changeMode">
        <i :class="darkMode ? 'material-icons' : 'material-icons-outlined'">brightness_2</i> 
        <label>Dark Mode</label>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  components:{
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  },
  methods: {
    changeMode() {
      this.$store.commit('changeDarkMode')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/scss/global.scss';
  
  .navbar{
    @include themify(null, $themes) {
      background-color: theme(primary);
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0px 60px;
    box-shadow: 0px 0px 3px rgba(0,0,0, 0.2);

    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
    }

    .actions {
      button {
        background: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        cursor: pointer;
        @include themify(null, $themes) {
          color: theme(color);
        }

        i {
          transform: rotate(140deg);
          cursor: pointer;
          font-size: 14px;
        }

        label {
          line-height: 16px;
          margin-left: 5px;
          cursor: pointer;
        } 
      }
    }
  }
</style>
