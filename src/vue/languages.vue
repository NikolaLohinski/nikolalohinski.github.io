<template>
  <v-section size="S">
    <span slot="title">
      <div class="icon">
        <i class="fa fa-comments-o"></i>
      </div>
      {{ $t('languages.title')}}
    </span>
  </v-section>
</template>
<script>
  import Section from './section.vue';
  export default {
    data () {
      return {};
    },
    components: {
      'v-section': Section
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/fonts';
</style>
