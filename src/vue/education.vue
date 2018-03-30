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
          {{ $t('education.supaero.name') }}
        </span>
        <span slot="sub-title">
          {{ $t('education.supaero.degree') }}
        </span>
        <span slot="sub-complement">
          2014 - 2018
        </span>
        <ul slot="bullet-points">
          <li v-html="bold2Html($t('education.supaero.desc-1'))"></li>
          <li v-html="bold2Html($t('education.supaero.desc-2'))"></li>
        </ul>
      </v-article>
      <v-article>
        <span slot="title">
          {{ $t('education.lycee-parc.name') }}
        </span>
        <span slot="sub-title">
          {{ $t('education.lycee-parc.degree') }}
        </span>
        <span slot="sub-complement">
          2012 - 2014
        </span>
        <ul slot="bullet-points">
          <li v-html="bold2Html($t('education.lycee-parc.desc-1'))"></li>
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
    },
    methods: {
      bold2Html (s) {
        const splitted = s.split('**');
        if (splitted.length < 2) {
          return s;
        } else {
          let newString = splitted[0];
          for (let k = 1; k < splitted.length; k = k + 2) {
            newString += '<b>' + splitted[k] + '</b>' + splitted[k + 1];
          }
          return newString;
        }
      }
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/fonts';
</style>
