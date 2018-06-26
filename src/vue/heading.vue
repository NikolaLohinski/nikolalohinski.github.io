<template>
  <div class="heading">
    <div class="name-and-address">
      <div class="name">
        Nikola LOHINSKI
      </div>
      <div class="address">
        <i class="fa fa-map-marker"></i>{{ $t('address') }}
      </div>
    </div>
    <ul class="items">
      <li class="github">
        <div class="bullet"><i class="fa fa-code-fork"></i></div>
        <a :href="$t('github')">
          {{ $t('github') }}
        </a>
      </li>
      <li class="email">
        <div class="bullet"><i class="fa fa-user"></i></div>
        <a :href="`mailto:${ $t('mail') }`">
          {{ $t('mail') }}
        </a>
      </li>
      <li class="telephone">
        <div class="bullet"><i class="fa fa-phone"></i></div>
        <a :href="`tel:${ $t('tel') }`">
          {{ $t('tel-display') }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/fonts';
  @import '../scss/dimensions';
  @import '../scss/colors';
  $icon-size: 18px;
  .heading {
    margin: 0 15px 5px 15px;
    > * {
      display: inline-block;
    }
    .name-and-address {
      min-width: 314px;
      width: 59%;
      .name {
        font-size: $name-font-size;
      }
      .address {
        .fa {
          width: $icon-size;
          margin: 5px;
        }
      }
    }
    @media screen and (max-device-width: $collapse-heading-width),
        screen and (max-width: $collapse-heading-width){
      ul {
        margin: 0;
         > li {
          margin: 5px 0 !important;
        }
      }
    }
    ul {
      margin-bottom: 5px;
      list-style: none;
      padding: 0;
      min-width: 250px;
      width: 39%;
      display: inline-block;
      li {
        margin: 5px 0 5px 20px;
        height: 28%;
        .bullet {
          width: 22px;
          text-align: center;
          display: inline-block;
          margin-right: 5px;
          i {
            width: $icon-size;
          }
        }
      }
    }
  }
</style>
