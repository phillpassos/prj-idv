var ScreenShotReporter = require('protractor-screenshot-reporter');
var rimraf = require('rimraf');
var _e2e_errors = '../e2e_errors/';

exports.config =
{
    specs: ['./e2e/**/*_test.js'],

    baseUrl: 'http://localhost/',

    multiCapabilities: [{browserName: 'chrome'}],

    suites:{},

    onPrepare: function()
    {
        var _width = 999;
        var _height = 800;
        var _optsScreenShots = {baseDirectory: _e2e_errors, takeScreenShotsOnlyForFailedSpecs: true};

        browser.driver.manage().window().setSize(_width, _height);

        jasmine.getEnv().addReporter(new ScreenShotReporter(_optsScreenShots));

        rimraf.sync(_e2e_errors); // remove o diretório de erros do teste de integração a cada novo teste rodado - síncrono

        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);
    }
}
