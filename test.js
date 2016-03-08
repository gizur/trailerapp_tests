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

    return driver.init(desired);
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


  it("should get the url", function () {

    // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
    return driver
      .contexts().then(function (contexts) {
        debug(contexts);
        return driver.context(contexts[1]); // choose the webview context
      })
      .eval('document.getElementById("deviceready")')
      .then(function (res) {
        debug(res);
      });
    
  });

});
