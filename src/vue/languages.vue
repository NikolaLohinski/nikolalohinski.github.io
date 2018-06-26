<template>
  <v-section size="S">
    <span slot="title">
      <div class="icon">
        <i class="fa fa-globe"></i>
      </div>
      {{ $t('languages.title')}}
    </span>
    <div slot="content">
      <table class="languages">
        <tr v-for="language in languages" class="language">
          <td class="name">{{ $t(`languages.${language.name}`) }}</td>
          <td class="level">
            <div class="bar" v-for="l in 6" :level="l <= language.level"></div>
            <div class="tooltip">
              <div class="label">
                {{ $t(`languages.${language.name}`) }}
              </div>
              <div class="text">
                {{ $t(`languages.${language.tooltip}`) }}
              </div>
            </div>
          </td>
          <td class="info">{{ $t(`languages.${language.info}`) }}</td>
        </tr>
      </table>
    </div>
  </v-section>
</template>
<script>
  import Section from './section.vue';
  export default {
    data () {
      return {
        languages: [
          { name: 'french', level: 6, info: 'native-language', tooltip: 'bilingual' },
          { name: 'english', level: 5, info: 'toefl-610', tooltip: 'confirmed' },
          { name: 'croatian', level: 4, info: 'mother-tongue', tooltip: 'fluent' }
        ]
      };
    },
    components: {
      'v-section': Section
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/fonts';
  @import '../scss/dimensions';
  @import '../scss/colors';
  .languages {
    margin: -10px auto 15px auto;
    .language {
      > td {
        padding: 15px 0;
        text-align: center;
        &.name {
          width: 20%;
        }
        &.level {
          position: relative;
          .bar {
            width: 6px;
            height: 25px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 2px;
            background: $language-background-graph-color;
            opacity: 0.25;
            &[level] {
              opacity: 1;
            }
            border: 1px solid $language-border-graph-color;
            position: relative;
            z-index: 0;
          }
          &:hover {
            .tooltip {
              opacity: 1;
            }
          }
          .tooltip {
            position: absolute;
            top: 100%;
            margin-top: -2px;
            pointer-events: none;
            border-radius: 3px;
            background-color: $tooltip-background-color;
            color: $tooltip-font-color;
            padding: 5px 10px;
            z-index: 1;
            display: block;
            left: 50%;
            transition: opacity 200ms;
            transform: translateX(-50%);
            opacity: 0;
            &:after {
              content: '';
              position: absolute;
              top: -12px;
              left: 50%;
              margin-left: -3px;
              border: 6px solid transparent;
              border-bottom-color: $tooltip-background-color;
              z-index: 2;
            }
            .label {
              font-weight: bold;
            }
          }
        }
        &.info {
          width: 35%;
        }
      }
    }
  }
</style>
