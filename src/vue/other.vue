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
          <a href="https://www.as-isae.fr/">
            {{ $t('other.as-isae.name') }}
          </a>
        </span>
        <span slot="sub-title">
          {{ $t('other.as-isae.role') }}
        </span>
        <span slot="sub-complement">
          2016 - 2017
        </span>
        <ul slot="bullet-points">
          <li>
            <span v-embolden="$t('other.as-isae.desc-1')"></span> :
            <a href="https://suponts-heros.github.io">
              https://suponts-heros.github.io
            </a>
          </li>
        </ul>
      </v-article>
      <v-article>
        <span slot="title" size="S">
          <b>{{ $t('other.music.name') }}</b> :
          {{ $t('other.music.instruments') }}
          <br>
          <b>{{ $t('other.sports.name') }}</b> :
          {{ $t('other.sports.sports') }}
          <br>
          <b>{{ $t('other.art.name') }}</b> :
          {{ $t('other.art.content') }}
        </span>
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
