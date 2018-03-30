<template>
  <div class="root">
    <sheet>
      <heading slot="content"></heading>
    </sheet>
  </div>
</template>
<script>
  import Sheet from './sheet.vue';
  import Heading from './heading.vue';
  export default {
    data () {
      return {};
    },
    components: {
      Sheet,
      Heading
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/colors';
  @import '../scss/fonts';
  @import '../scss/dimensions';
  .root {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: $general-font-size;
    background: $default-background-color;
    color: $default-font-color;
    font-family: $default-font-family;
  }
</style>
