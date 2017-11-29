'use strict';

angular.module('triphowmuchApp')
  .controller('idxCtrl', function ($scope, $location, loginFct) {

//      $scope.login = function () {
//        var popUrl = '/#!/login';	//팝업창에 출력될 페이지 URL
//        var popOption = 'width=700, height=700, resizable=no, scrollbars=no, status=no;';    //팝업창 옵션(optoin)
//        window.open(popUrl, '223', popOption);
//
//      };


    $scope.gohome = function () {
      $location.path('/');
    };

    $scope.goCarts = function () {

      console.log('로컬 스토리지');
      console.log(localStorage.getItem('email'));
      var e = localStorage.getItem('email');
      console.log(e);

      if (e === null) {
        var name = prompt('사용하시려면 email을 입력해 주세요');

        if(name!==null){
          localStorage.setItem('email', name);
          $location.path('/savedSpot');

        }

      }else{
        $location.path('/savedSpot');
      }


    };


  });


