"use strict";

var wd = require("wd");
var _ = require('underscore');
require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var should = chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var debug = console.log.bind(console, 'DEBUG');

var serverConfigs = {
  local: {
    host: 'localhost',
    port: 4723
  },
  sauce: {
    host: 'ondemand.saucelabs.com',
    port: 80,
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_ACCESS_KEY
  }
};

var configure = function (driver) {
  // See whats going on
  driver.on('status', function (info) {
    console.log(info.cyan);
  });
  driver.on('command', function (meth, path, data) {
    console.log(' > ' + meth.yellow, path.grey, data || '');
  });
  driver.on('http', function (meth, path, data) {
    console.log(' > ' + meth.magenta, path, (data || '').grey);
  });
};

// return false for null and undefined and true for everything else
var notNull = function (msg, x) {
  if (!x) throw new Error(msg)
};

describe("trailerapp tests", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = process.env.SAUCE ?
      serverConfigs.sauce : serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    configure(driver);

    var desired = {
      browserName: '',
      'appium-version': '1.5',
      platformName: 'iOS',
      platformVersion: '9.2',
      deviceName: 'iPhone Simulator', //'iPhone Simulator','iPhone 6s'
      app: 'Besiktning/platforms/ios/build/emulator/Besiktning.app'
    };

    return driver.init(desired)
      .elementsByIosUIAutomation('.tableViews()[0].cells()', function (err, el) {
        el.elementByIosUIAutomation('.elements()["UICatalog"]', function (err, el) {
          el.getAttribute('name', function (err, name) {
            console.log(name);
          });
        });
      })
      .contexts().then(function (contexts) {
        // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
        debug(contexts);
        return driver.context(contexts[1]); // choose the webview context
      })
  });

  after(function () {
    return driver
      .quit()
      .finally(function () {
        if (process.env.SAUCE) {
          return driver.sauceJobStatus(allPassed);
        }
      });
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });


  it("should display the content page with three tabs", function () {
    return driver
      .elementById('contacts').then(notNull.bind(this, 'missing contacts tab'))
      .elementById('survey').then(notNull.bind(this, 'missing survey tab'))
      .elementById('settings').then(notNull.bind(this, 'missing settings tab'));
  });

  it("should should be albe to login", function () {
    return driver
      .elementById('contacts').then(notNull.bind(this, 'missing contacts tab'))
      .elementById('survey').then(notNull.bind(this, 'missing survey tab'))
      .elementById('settings').then(notNull.bind(this, 'missing settings tab'));
  });

});
