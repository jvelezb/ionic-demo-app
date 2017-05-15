'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://PRODSERVER/api',
    'SOME_OTHER_URL': 'https://echo.getpostman.com'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    'version': '1.0.0',
    'build': ''
    /*endinject*/
  }

});
