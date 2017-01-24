// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-02-24 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/lodash/dist/lodash.min.js',
	  'bower_components/highcharts/highcharts.js',
      'bower_components/highcharts/highcharts-more.js',
      'bower_components/highcharts/modules/exporting.js',
      'bower_components/moment/moment.js',
      'bower_components/moment/locale/pt-br.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-file-model/angular-file-model.js',
      'bower_components/angular-i18n/angular-locale_pt-br.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/select2/dist/js/select2.min.js',
      'bower_components/angular-ui-calendar/src/calendar.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

      'test/helpers/unit.js',

      'app/scripts/app.js',
      'app/scripts/app.config.js',
      'app/scripts/app.constant.js',

      'app/scripts/**/*.js',

      'test/spec/**/*.js',

      'app/includes/**/*.html'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)

	reporters: ['progress', 'coverage'],

	preprocessors:
    {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/*.js': ['coverage'],
      'app/includes/*.html': ['ng-html2js']
    },

	ngHtml2JsPreprocessor:
    {
      stripPrefix: 'app/',
      moduleName: 'prjidv-includes'
    },

	coverageReporter:
    {
      type: 'lcov',
      dir: 'unit_coverage'
    },

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-opera-launcher',
      'karma-safari-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

	browsers: ['PhantomJS', 'Chrome', 'ChromeCanary', 'Firefox', /*'FirefoxNightly'*/, 'Safari', 'IE'],

	browserNoActivityTimeout: 30000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
