<template>
  <v-section size="L">
    <span slot="title">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      {{ $t('pro-experience.title')}}
    </span>
    <div slot="content">
      <v-article>
        <span slot="title">
          <a href="https://www.thalesgroup.com/">
            {{ $t('pro-experience.thales-avs.name') }}
          </a>
        </span>
        <span slot="title-complement">
          {{ $t('pro-experience.toulouse-france') }}
        </span>
        <span slot="sub-title">
          {{ $t('pro-experience.end-of-course-internship') }}
        </span>
        <span slot="sub-complement">
          {{ $t('datetime.april') }} 2018 - {{ $t('datetime.now') }}
        </span>
        <ul slot="bullet-points">
          <li v-embolden="$t('pro-experience.thales-avs.desc-1')"></li>
          <li v-embolden="$t('pro-experience.thales-avs.desc-2')"></li>
       </ul>
      </v-article>
      <v-article>
        <span slot="title">
          <a href="http://sfara.com/">
            {{ $t('pro-experience.sfara.name') }}
          </a>
        </span>
        <span slot="title-complement">
          {{ $t('pro-experience.new-york-usa') }}
        </span>
        <span slot="sub-title">
          {{ $t('pro-experience.internship-gap-year') }}
        </span>
        <span slot="sub-complement">
          {{ $t('datetime.january') }} 2017 - {{ $t('datetime.july') }} 2017
        </span>
        <ul slot="bullet-points">
          <li v-embolden="$t('pro-experience.sfara.desc-1')"></li>
          <li v-embolden="$t('pro-experience.sfara.desc-2')"></li>
          <li v-embolden="$t('pro-experience.sfara.desc-3')"></li>
        </ul>
      </v-article>
      <v-article>
        <span slot="title">
          <a href="https://www.thalesgroup.com/">
            {{ $t('pro-experience.thales-avionics.name') }}
          </a>
        </span>
        <span slot="title-complement">
          {{ $t('pro-experience.toulouse-france') }}
        </span>
        <span slot="sub-title">
          {{ $t('pro-experience.internship-gap-year') }}
        </span>
        <span slot="sub-complement">
          {{ $t('datetime.july') }} 2016 - {{ $t('datetime.december') }} 2016
        </span>
        <ul slot="bullet-points">
          <li v-embolden="$t('pro-experience.thales-avionics.desc-1')"></li>
          <li v-embolden="$t('pro-experience.thales-avionics.desc-2')"></li>
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
