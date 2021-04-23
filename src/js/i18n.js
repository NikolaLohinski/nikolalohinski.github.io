import enEN from '../yaml/en-EN.yaml';
import frFR from '../yaml/fr-FR.yaml';
// import hrHR from '../yaml/hr-HR.yaml';

export default (vue) => {
  vue.i18n.add('en-EN', enEN);
  vue.i18n.add('fr-FR', frFR);
  // vue.i18n.add('hr-HR', hrHR);

  vue.i18n.set('en-EN');

  return {
    'languages': ['en-EN', 'fr-FR'],
    'default': 'en-EN'
  };
};
