<template>
  <v-section size="M">
    <span slot="title">
      <div class="icon">
        <i class="fa fa-info"></i>
      </div>
      {{ $t('other.title')}}
    </span>
    <div slot="content">
      <v-article>
        <span slot="title">
          <a href="https://nikolalohinski.github.io/ace/">
            {{ $t('other.google-cloud-architect.name') }}
          </a>
        </span>
        <span slot="sub-title">
          {{ $t('other.google-cloud-architect.role') }}
        </span>
        <span slot="sub-complement">
          {{ $t('datetime.april') }} 2019
        </span>
        <div slot="bullet-points" style="margin-bottom: 15px">
          <a href="https://www.credential.net/2owi1o2z?key=4ed0b80539780e02c2b08fb10c66355a622cf07779c740f8a380a1463911143b">
            <i class="fa fa-link"></i>
            {{ $t('other.google-cloud-architect.link') }}
          </a>
        </div>
      </v-article>
      <v-article>
        <span slot="title">
          <a href="https://nikolalohinski.github.io/ace/">
            {{ $t('other.ace.name') }}
          </a>
        </span>
        <span slot="sub-title">
          {{ $t('other.ace.role') }}
        </span>
        <span slot="sub-complement">
          2017 - {{ $t('datetime.now') }}
        </span>
        <div slot="bullet-points">
          <a href="https://nikolalohinski.github.io/ace/">
            <i class="fa fa-link"></i>
            https://nikolalohinski.github.io/ace
          </a>
          <ul>
            <li>
              <span v-embolden="$t('other.ace.desc-1')"></span>
            </li>
            <li>
              <span v-embolden="$t('other.ace.desc-2')"></span>
            </li>
          </ul>
        </div>
      </v-article>
      <v-article>
        <span slot="title">
          <a href="https://project-nebula.github.io/">
            {{ $t('other.nebula.name') }}
          </a>
        </span>
        <span slot="sub-title">
          {{ $t('other.nebula.role') }}
        </span>
        <span slot="sub-complement">
          2016 - 2017
        </span>
        <div slot="bullet-points">
          <a href="https://project-nebula.github.io">
            <i class="fa fa-link"></i>
            https://project-nebula.github.io
          </a>
          <ul>
            <li>
              <span v-embolden="$t('other.nebula.desc-1')"></span>
            </li>
          </ul>
        </div>
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
