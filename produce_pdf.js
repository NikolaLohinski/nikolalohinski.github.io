'use strict';
var page = require('webpage').create();
var system = require('system');
var packageJSON = require('./package.json');
var nbLanguages = packageJSON.config.languages.length;
var input = system.args[1];
var output = system.args[2];
var width = 795;
var height = 1130;
page.paperSize = {
  width: width,
  height: height,
  margin: {
    left: '10mm',
    right: '0mm',
    top: '0mm',
    bottom: '0mm'
  }
};
page.viewportSize = {
  width: width,
  height: height
};
page.clipRect = {
  top: 0,
  left: 0,
  width: width,
  height: height
};

var evaluateLanguages = function (languages) {
  if (languages.length == 0) {
    phantom.exit();
  } else {
    var lang = languages.pop();
    var out = output + '/' + lang + '.pdf';
    console.log(
      'Now building ' + out + ' (' + (nbLanguages - languages.length) + '/' + nbLanguages + ')'
    );
    page.evaluateJavaScript('function(){store.dispatch("changeLanguage","' + lang + '")}');
    window.setTimeout(function () {
      page.render(out);
      evaluateLanguages(languages);
    }, 1000);
  }
};

page.open(input, function (status) {
  if (status !== 'success') {
    console.log('Unable to load the address!');
    phantom.exit(1);
  } else {
    evaluateLanguages(packageJSON.config.languages);
  }
});
