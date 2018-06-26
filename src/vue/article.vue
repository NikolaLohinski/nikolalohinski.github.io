<template>
  <div class="article">
    <div class="article-title">
      <div class="main-title">
        <slot name="title"></slot>
      </div>
      <div class="title-complement">
        <slot name="title-complement"></slot>
      </div>
    </div>
    <div class="article-sub-title">
      <div class="sub-title">
        <slot name="sub-title"></slot>
      </div>
      <div class="sub-complement">
        <slot name="sub-complement"></slot>
      </div>
    </div>
    <div class="bullet-points">
      <slot name="bullet-points"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss">
  @import '../scss/colors';
  @import '../scss/dimensions';
  @import '../scss/fonts';
  .article {
    .article-title {
      display: block;
      position: relative;
      > div {
        display: inline-block;
      }
      .main-title {
        font-size: $article-title-font-size;
        [size='S'] {
          font-size: $article-small-title-font-size;
        }
      }
      .title-complement {
        font-size: $article-title-complement-font-size;
        float: right;
        text-align: right;
      }
    }
    .article-sub-title {
      position: relative;
      margin-bottom: 5px;
      > div {
        display: inline-block;
      }
      .sub-title {
        font-size: $article-sub-title-font-size;
        font-style: italic;
      }
      .sub-complement {
        font-size: $article-sub-title-complement-font-size;
        float: right;
        font-style: italic;
      }
    }
    .bullet-points {
      ul {
        list-style: none;
        padding-left: 10px;
        margin-top: 5px;
        margin-bottom: 20px;
        li {
          position: relative;
          margin: 5px;
          &:before {
            content: '\2012';
            position: absolute;
            left: -15px;
          }
          font-size: 16px;
          text-align: justify;
        }
      }
    }
     b {
      color: $bold-font-color;
      font-weight: normal;
    }
  }
</style>
