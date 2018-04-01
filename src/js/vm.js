import Root from '../vue/root.vue';
export default {
  el: '#app-container',
  computed: {
    loading () {
      return this.$store.getters.getLoading;
    }
  },
  store: global.store,
  components: {
    Root
  },
  mounted () {
    const userLanguage = navigator.language || navigator.userLanguage;
    this.$store.commit('setLanguageList', global.languageOptions.languages);
    if (global.languageOptions.languages.includes(userLanguage)) {
      this.$store.commit('setLanguage', userLanguage);
    } else {
      this.$store.commit('setLanguage', global.languageOptions.default);
    }
    this.$store.commit('setLoading', false);
  }
};
