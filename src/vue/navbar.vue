<template>
  <div class="navbar">
    <a href="." class="item logo" title="Nikola LOHINSKI"></a>
    <v-touch tag="a"
             @tap="selecting = !selecting"
             class="item language-selector"
             :title="$t('navbar.translate')"
             href="#">
      <span class="selector">
        <i class="fa fa-globe"></i>
        {{ language.split('-')[0] }}
      </span>
      <ul class="list" :hide="!selecting">
        <v-touch tag="li" v-for="l in languageList"
             class="language"
             :key="l"
             :title="$t(`navbar.translate-in-${l}`)"
             @tap="setLanguage(l)">
          <span :class="`flag-icon flag-icon-${languageToFlag[l]}`">
          </span>
          {{ $t(`navbar.${l}`) }}
        </v-touch>
      </ul>
    </v-touch>
    <v-touch tag="a"
             :href="`pdf/${$store.getters.getLanguage}.pdf`"
             target="_blank"
             :title="$t('navbar.pdf')"
             class="item pdf">
      <i class="fa fa-file-pdf-o"></i>
    </v-touch>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        languageToFlag: {
          'fr-FR': 'fr',
          'en-EN': 'gb',
          'hr-HR': 'hr'
        },
        selecting: false
      };
    },
    store: global.store,
    computed: {
      languageList () {
        return this.$store.getters.getLanguageList;
      },
      language () {
        return this.$store.getters.getLanguage;
      }
    },
    methods: {
      setLanguage (language) {
        this.$store.dispatch('changeLanguage', language).then(null);
      }
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/colors';
  @import '../scss/images';
  @import '../scss/dimensions';
  $nav-height: 45px;
  .navbar {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: $darker-background-color;
    @media print { display: none; }
    .item {
      display: inline-block;
      margin: 15px 10px 0 10px;
      height: $nav-height;
      transition: all 200ms;
      cursor: pointer;
      vertical-align: top;
      font-size: $font-size-nav-bar;
      color: $darker-background-font-color;
      line-height: $nav-height;
      user-select: none;
      outline: none;
      float: left;
      &.logo {
        position: absolute;
        left: 50%;
        margin-left: -15px;
        margin-top: 12px;
        width: 30px;
        background: $logo-no-background 0 10px no-repeat;
        background-size: 30px;
        &:hover {
          filter: brightness(0.7);
        }
      }
      &.pdf {
        float: right;
        width: 30px;
        text-align: center;
      }
      &:hover {
        .selector .fa {
          color: $navbar-font-hover-color;
        }
      }
      .selector {
        color: $navbar-font-hover-color;
        text-transform: capitalize;
        .fa {
          transition: all 200ms;
          margin-right: 5px;
          color: $darker-background-font-color;
        }
      }
      ul {
        padding: 0;
        margin: 0 0 0 -10px;
        list-style: none;
        border-radius: 0 0 3px 3px;
        transition: all 200ms;
        &[hide] {
          pointer-events: none;
          opacity: 0;
        }
        li {
          background-color: $darker-background-color;
          padding: 15px 30px 15px 10px;
          line-height: initial;
          transition: color 200ms;
          border-top: 1px solid $default-border-color;
          .flag-icon {
            margin-right: 5px;
            transform: scale(0.75);
            position: relative;
            top: -1px;
          }
          &:first-child {
            border-top: none;
          }
          &:active {
            background-color: $lighter-background-color;
          }
          &:hover {
            color: $navbar-font-hover-color;
          }
        }
      }
    }
  }
</style>
