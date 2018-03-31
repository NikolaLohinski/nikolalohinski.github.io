<template>
  <div class="navbar">
    <a href="#" class="logo"></a>
    <v-touch tag="a"
             href="#"
             v-for="l in languages"
             :key="l"
             @tap="setLanguage(l)">
      {{ $t(`languages.${l}`) }}
    </v-touch>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        languages: ['english', 'french']
      };
    },
    store: global.store,
    methods: {
      setLanguage (language) {
        this.$store.commit('setLanguage', language);
      }
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/colors';
  @import '../scss/images';
  @import '../scss/dimensions';
  $nav-height: 50px;
  .navbar {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: $darker-background-color;
    @media print { display: none; }
    a {
      display: inline-block;
      margin: 10px 10px 0 10px;
      height: $nav-height;
      transition: all 200ms;
      cursor: pointer;
      vertical-align: top;
      font-size: $font-size-nav-bar;
      color: $darker-background-font-color !important;
      line-height: $nav-height;
      user-select: none;
      outline: none;
      &.logo {
        width: 50px;
        background: $logo-no-background 10px 10px no-repeat;
        background-size: 30px;
      }
      &:hover {
        filter: brightness(0.7);
      }
    }
  }
</style>
