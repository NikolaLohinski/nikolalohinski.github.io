<template>
  <div class="sheet">
    <slot name="content"></slot>
  </div>
</template>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/colors';
  @import '../scss/dimensions';
  .sheet {
    position: relative;
    background: $paper-background-color;
    display: block;
    margin: 15px auto;
    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
    border-radius: 3px;
    overflow: hidden;
    padding: $margin-top-bottom $margin-top-bottom;
    height: $A4-height - 2 * $margin-top-bottom;
    width: $A4-width - 2 * $margin-left-right;
    @media screen and (max-width: $A4-width),
    screen and (max-device-width: $A4-width) {
      width: 100vw;
      height: initial;
      padding: 0;
      margin: 0;
      border-radius: 0;
    }
  }
</style>
