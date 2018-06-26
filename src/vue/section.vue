<template>
  <div class="section" :size="size">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'S',
        validator (size) {
          return ['S', 'M', 'L'].indexOf(size) !== -1;
        }
      }
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss">
  @import '../scss/colors';
  @import '../scss/dimensions';
  .section {
    margin: 0;
    display: inline-block;
    vertical-align: top;
    &[size='L'] {
      width: 98%;
    }
    &[size='M'] {
      width: 59%;
    }
    &[size='S'] {
      width: 39%;
    }
    @media screen and (max-device-width: $A4-width),
    screen and (max-width: $A4-width){
      width: 98% !important;
    }
    .title {
      border-bottom: 1px solid $default-border-color;
      font-size: $titles-font-size;
      margin: 0 15px;
      .icon {
        display: inline-block;
        text-align: center;
        width: $titles-icon-size;
        margin-right: 5px;
      }
    }
    .content {
      margin: 5px 15px;
    }
  }
</style>
