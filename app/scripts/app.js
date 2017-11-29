'use strict';

/**
 * @ngdoc overview
 * @name triphowmuchApp
 * @description
 * # triphowmuchApp
 *
 * Main module of the application.
 */
angular.module('triphowmuchApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
])
  .constant('BASE_URL', 'http://52.79.207.88:8000')
  .config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
  })

  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/list', {
        templateUrl: 'views/main_selectDomi.html',
        controller: 'tripCtrl',
        cache: true
      })

      //숙소 세부정보
      .when('/hotel/:cntID', {
        templateUrl: 'views/hotel_detail.html',
        controller: 'hotelCtrl',
        cache: true
      })

      // 여행지 세부정보
      .when('/list/:cntID', {
        templateUrl: 'views/spot_detail.html',
        controller: 'spotCtrl'
      })

      // 저장된 여행지
      .when('/savedSpot', {
        templateUrl: 'views/savedSpot.html',
        controller: 'listCtrl'
      })

      // 저장된 여행지 리스트보기
      .when('/spotList/detail/:num', {
        templateUrl: 'views/spotList_detail.html',
        controller: 'spotlistCtrl'
      })

      // .when('/spotList/detail', {
      //   templateUrl: 'views/spotList_detail.html',
      //   controller: 'savedCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });


  });
