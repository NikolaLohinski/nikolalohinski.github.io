'use strict';
/* 1. Import modules */
import 'inobounce';
import Vue from 'vue';
import VueX from 'vuex';
import VueTouch from 'vue-touch';
import VueCanvas from 'vue-easeljs';
import VuexI18n from 'vuex-i18n';
import VueResource from 'vue-resource';
// Import base agents
import Store from './store.js';
import Vm from './vm.js';
import I18n from './i18n.js';

/* 2. Set global directives */
Vue.use(VueCanvas);
Vue.use(VueResource);
Vue.use(VueTouch, { name: 'v-touch' });
// Directive to change **word** into <b>word</b> html
Vue.directive('embolden', (el, binding) => {
  const split = binding.value.split('**');
  let newString = split[0];
  for (let k = 1; k < split.length; k = k + 2) {
    newString += '<b>' + split[k] + '</b>' + split[k + 1];
  }
  el.innerHTML = newString;
});

/* 3. Set VueX state manager */
Vue.use(VueX);
Vm.store = new VueX.Store(Store);

/* 4. Set VuexI18n internationalization plugin */
// Initialize plugin
Vue.use(VuexI18n.plugin, Vm.store);
// The second argument is the default language
I18n(Vue, 'english');
Vm.store.i18n = Vue.i18n;

/* 5. Create Vue Virtual machine instance */
// Create Vue machine
global['vm'] = new Vue(Vm);

/* 6. Save store instance globally */
// Store vuex Store for components to reach out
global['store'] = Vm.store;

/* 7. Set auto reload tool on cache update */
// To reload page whenever cache has been updated
window.applicationCache.addEventListener('updateready', () => {
  window.location.reload();
});
if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
  window.location.reload();
}
