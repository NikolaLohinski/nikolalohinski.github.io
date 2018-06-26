<template>
  <v-section size="M">
    <span slot="title">
      <div class="icon">
        <i class="fa fa-graduation-cap"></i>
      </div>
      {{ $t('education.title')}}
    </span>
    <div slot="content">
      <v-article>
        <span slot="title">
          <a href="https://www.isae-supaero.fr/">
            {{ $t('education.supaero.name') }}
          </a>
        </span>
        <span slot="sub-title">
          {{ $t('education.supaero.degree') }}
        </span>
        <span slot="sub-complement">
          2014 - 2018
        </span>
        <ul slot="bullet-points">
          <li v-embolden="$t('education.supaero.desc-1')"></li>
          <li v-embolden="$t('education.supaero.desc-2')"></li>
        </ul>
      </v-article>
      <v-article>
        <span slot="title">
          <a href="https://lyceeduparc.fr/ldp/">
            {{ $t('education.lycee-parc.name') }}
          </a>
        </span>
        <span slot="sub-title">
          {{ $t('education.lycee-parc.degree') }}
        </span>
        <span slot="sub-complement">
          2012 - 2014
        </span>
        <ul slot="bullet-points">
          <li v-embolden="$t('education.lycee-parc.desc-1')"></li>
        </ul>
      </v-article>
    </div>
  </v-section>
</template>
<script>
  import Section from './section.vue';
  import Article from './article.vue';
  export default {
    components: {
      'v-section': Section,
      'v-article': Article
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/fonts';
</style>
