<template>
  <transition name="slide"
              :enter-class="(transitionMode < 0) ? 'left' : 'right'"
              :leave-to-class="(transitionMode > 0) ? 'left' : 'right'">
    <v-touch tag="div"
             class="sheet"
             @swipeleft="swipe(1)"
             @swiperight="swipe(-1)"
             v-if="transitionMode !== 0">
      <slot name="content"></slot>
    </v-touch>
  </transition>
</template>
<script>
  export default {
    methods: {
      swipe (direction) {
        const index = this.languageList.indexOf(this.language);
        const _temp = (index + direction) + this.languageList.length;
        this.$store.dispatch(
          'changeLanguage',
          this.languageList[_temp % this.languageList.length]
        ).then(null);
      }
    },
    computed: {
      languageList () {
        return this.$store.getters.getLanguageList;
      },
      language () {
        return this.$store.getters.getLanguage;
      },
      transitionMode () {
        return this.$store.getters.getTransitionMode;
      }
    },
    store: global.store
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/colors';
  @import '../scss/dimensions';
  .sheet {
    position: relative;
    background: $paper-background-color;
    display: block;
    margin: 65px auto 15px auto;
    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
    border-radius: 3px;
    overflow: visible;
    padding: $margin-top-bottom $margin-top-bottom;
    height: $A4-height - 2 * $margin-top-bottom;
    width: $A4-width - 2 * $margin-left-right;
    @media screen and (max-width: $A4-width),
    screen and (max-device-width: $A4-width) {
      position: fixed;
      top: 10px;
      left: 0;
      width: 100%;
      height: calc(100vh - 115px);
      margin: 0;
      padding: 65px 0 25px 0;
      border-radius: 0;
      box-shadow: none;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      overflow-x: hidden;
    }
    > * {
      margin: 5px auto;
    }
    @media print {
      margin: 0;
      border-radius: initial;
      box-shadow: initial;
      background: white;
    }
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform .2s;
  }
  .left {
    transform: translateX(100vw);
  }
  .right {
    transform: translateX(-100vw);
  }
</style>
