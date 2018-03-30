const translations = {
  english: {},
  french: {}
};

export default (vue, defaultLanguage) => {
  // Add languages
  vue.i18n.add('english', translations.english);
  vue.i18n.add('french', translations.french);
  // Set default
  vue.i18n.set(defaultLanguage);
};
