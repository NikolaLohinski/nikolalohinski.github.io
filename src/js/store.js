export default {
  mutations: {
    setLanguage (_, language) {
      this.i18n.set(language);
    }
  }
};
