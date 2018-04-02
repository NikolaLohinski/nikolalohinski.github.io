export default {
  state: {
    language: '',
    languageList: [],
    loading: true,
    transitionMode: false
  },
  getters: {
    getLoading (state) {
      return state.loading;
    },
    getLanguage (state) {
      return state.language;
    },
    getLanguageList (state) {
      return state.languageList;
    },
    getTransitionMode (state) {
      return state.transitionMode;
    }
  },
  mutations: {
    setLoading (state, loading) {
      state.loading = loading;
    },
    setLanguageList (state, list) {
      state.languageList = list;
    },
    setLanguage (state, language) {
      state.language = language;
      this.i18n.set(language);
    },
    setTransitionMode (state, mode) {
      state.transitionMode = mode;
    }
  },
  actions: {
    changeLanguage (state, language) {
      return new Promise((resolve) => {
        if (state.getters.getLanguage !== language) {
          const oldIndex = state.getters.getLanguageList.indexOf(state.getters.getLanguage);
          const newIndex = state.getters.getLanguageList.indexOf(language);
          let direction = (oldIndex - newIndex) % state.getters.getLanguageList.length;
          if ([-1, 1].indexOf(direction) === -1) {
            direction = (direction > 0) ? -1 : 1;
          }
          state.commit('setTransitionMode', direction);
          setTimeout(() => {
            state.commit('setTransitionMode', 0);
            setTimeout(() => {
              state.commit('setLanguage', language);
              state.commit('setTransitionMode', direction);
            }, 200);
          }, 0);
        }
        resolve();
      });
    }
  }
};
