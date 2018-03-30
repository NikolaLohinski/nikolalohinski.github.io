<template>
  <div class="Page"
       :size="size"
       :layout="layout"
       :responsive="responsive">
    <header v-if="!noHeader">
      <slot name="header"></slot>
    </header>
    <body no-footer="noFooter" no-header="noHeader">
      <slot name="body"></slot>
    </body>
    <footer v-if="!noFooter">
      <slot name="footer">
      </slot>
      <div class="number">
        <slot name="number"></slot>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
    props: {
      layout: {
        type: String,
        default: 'portrait',
        validator (layout) {
          return ['portrait'].includes(layout);
        }
      },
      noFooter: {
        type: Boolean,
        default: false
      },
      noHeader: {
        type: Boolean,
        default: false
      },
      responsive: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'A4',
        validator (size) {
          return ['A4'].includes(size);
        }
      }
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import 'scss/general';
  @media print { .Page {margin: 0 !important; box-shadow: initial; border-radius: initial}}
  .Page {
    position: relative;
    background: $page-background;
    display: block;
    margin: 0 auto 0.5cm auto;
    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
    border-radius: 5px;
    padding: $margin-TB $margin-LR;
    overflow: hidden;
    &[size='A4'] {
      &[layout='portrait'] {
        height: $A4-big - 2 * $margin-TB;
        width: $A4-small - 2 * $margin-LR;
        &[responsive] {
          @media screen and (max-width: $A4-small), screen and (max-device-width: $A4-small) {
            width: 100vw;
            height: initial;
            padding: 0;
            margin: 0;
            border-radius: 0;
          }
        }
      }
    }
    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: $header-height;
    }
    body {
      margin: 0;
      position: relative;
      &:not([no-header]) {
        margin-top: $header-height;
      }
      &:not([no-footer]) {
        margin-top: $footer-height;
      }
    }
    footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: $footer-height;
      .number {
        @include center-transform();
      }
    }
  }
</style>
