export default {
  state: {
    language: 'english'
  },
  getters: {
    getLanguage (state) {
      return state.language;
    }
  },
  mutations: {
    setLanguage (state, language) {
      state.language = language;
      this.i18n.set(language);
    }
  }
};
