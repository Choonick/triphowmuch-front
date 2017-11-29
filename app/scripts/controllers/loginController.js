'use strict';

angular.module('triphowmuchApp')
  .controller('loginCtrl', function ($scope, $routeParams, loginFct) {

    loginFct.login(localStorage.getItem('email'));
  });
