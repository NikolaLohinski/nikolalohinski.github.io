<template>
  <div class="Report" id="report-body" :responsive="responsive">
    <nav>
      <a :href="'pdf/CV-Nikola-Lohinski-'+ lang + '.pdf'" class="tool print" title="Get PDF">PDF</a>
      <div @click="lang = 'eng'" class="tool go-eng" title="English">ENG</div>
      <div @click="lang = 'fra'" class="tool go-fra" title="Français">FRA</div>
    </nav>
    <div class="content">
      <page no-footer no-header :responsive="responsive">
        <resume slot="body" :lang="lang">
        </resume>
      </page>
    </div>
  </div>
</template>
<script>
  import Page from './Page.vue';
  import Resume from './Resume.vue';
  export default {
    data () {
      return {
        lang: 'eng',
        responsive: true
      };
    },
    components: {
      'page': Page,
      'resume': Resume
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import 'scss/general';
  // PRINT SETUP
  @media print {
    nav {display: none}
    .content {
      margin: 0 !important;
      padding: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      overflow-y: hidden !important;
      -webkit-overflow-scrolling:initial !important;
    }
  }
  @page{size: auto; margin: 0; padding: 0.25in 0.5in;}
  .Report {
    width: 100%;
    font-family: AppleLike;
    nav {
      position: fixed;
      z-index: 99;
      height: 50px;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #333333;
      cursor: pointer;
      .tool {
        margin: 0 15px;
        float: left;
        color: white;
        opacity: 1;
        background-color: transparent;
        box-shadow: none;
        border: none;
        height: 50px;
        width: auto;
        font-size: 20px;
        line-height: 50px;
        &.scroll-up {
          float: right;
        }
        &:hover {
          color: grey;
        }
      }
    }
    .content {
      width: calc(100vw - 0.5cm);
      padding: 0.25cm 0.25cm 0 0.25cm;
      height: calc(100vh - 50px);
      position: absolute;
      margin: 50px 0;
      top: 0;
      left: 0;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      background: $default-background;
    }
    &[responsive] {
      @media screen and (max-width: $A4-small), screen and (max-device-width: $A4-small) {
        .content {
          width: 100vw;
          padding: 0;
        }
      }
    }
  }
</style>
