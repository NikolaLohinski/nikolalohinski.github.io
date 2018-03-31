<template>
  <div class="root">
    <sheet>
      <div slot="content">
        <heading></heading>
        <pro-experience></pro-experience>
        <education></education>
        <it-skills></it-skills>
        <other></other>
        <languages></languages>
      </div>
    </sheet>
  </div>
</template>
<script>
  import Sheet from './sheet.vue';
  import Heading from './heading.vue';
  import ProExperience from './pro-experience.vue';
  import Education from './education.vue';
  import ItSkills from './it-skills.vue';
  import Other from './other.vue';
  import Languages from './languages.vue';
  export default {
    data () {
      return {};
    },
    components: {
      Sheet,
      Heading,
      ProExperience,
      Education,
      ItSkills,
      Other,
      Languages
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/colors';
  @import '../scss/fonts';
  @import '../scss/dimensions';
  @page {
    size: auto !important;
    margin: 0 .25in !important;
    padding: 0.25in 0.5in !important;
  }
  .root {
    @media print {
      margin: 0 !important;
      padding: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      overflow-y: hidden !important;
      -webkit-overflow-scrolling:initial !important;
    }
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
