<template>
  <div class="custom-select">
    <div class="ripple">
      <div 
        v-on:click="showOptions = !showOptions" 
        class="select-selected" 
        :class="{'select-arrow-active': showOptions}">{{value || placeholder}}
      </div>
    </div>

    <transition name="fade">
      <div class="select-items" v-if="showOptions">
        <div class="ripple" v-for="option in options" :key="option" v-on:click="onSelected(option)">{{option}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'customSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: String
  },
  methods: {
    onSelected(option) {
      this.showOptions = false; 
      this.value = option;
      this.$emit('input',option)
    }
  },
  data() {
    return {
      showOptions: false,
      value: ''
    }
  }
    
};
</script>


<style scoped lang="scss">
  @import "~@/scss/global.scss";

  .custom-select {
    @include themify(null, $themes) {
      position: relative;
      min-width: 170px;

      select {
        display: none;
      }

      .select-selected {
        background-color: transparent;
        padding: 0px 15px;
        height: 27px;
        line-height: 27px;
        user-select: none;

        &:after {
          position: absolute;
          content: "";
          top: 20px;
          right: 15px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-color: theme(color-secondary) transparent transparent transparent;
        }

        &.select-arrow-active:after {
          border-color: transparent transparent theme(color-secondary) transparent;
          top: 13px;
        }
      }

      .select-items div,.select-selected {
        color: theme(color-secondary);
        padding: 8px 16px;
        border: 1px solid transparent;
        border-color: transparent;
        cursor: pointer;
        user-select: none;
      }

      .select-items {
        border-radius: 6px;
        box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.23);
        position: absolute;
        font-size: 14px;
        background-color: theme(primary);
        top: 50px;
        left: 0;
        right: 0;
        z-index: 99;
      }

      .select-hide {
        display: none;
      }

      .select-items div:hover, .same-as-selected {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>