<template>
  <div class="heading">
    <div class="name">Nikola LOHINSKI</div>
    <ul class="items">
      <li class="github"><i class="fa fa-github"></i></li>
      <li class="email"><i class="fa fa-user-circle"></i></li>
      <li class="telephone"><i class="fa fa-phone"></i></li>
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
  .heading {
    width: 100%;
    > * {
      margin: 15px;
      display: inline-block;
    }
    .name {
      font-size: $name-font-size;
      vertical-align: top;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin: 5px 0;
      }
    }
  }
</style>
