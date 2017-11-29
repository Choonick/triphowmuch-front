'use strict';

angular.module('triphowmuchApp')
  .controller('hotelCtrl',function ($scope,$routeParams,spotFct) {

    console.log($routeParams.cntID);
    spotFct.getHoDetail($routeParams.cntID)
      .then(function (response) {
        $scope.detail = response.data;
      });

  });
