'use strict';

angular.module('triphowmuchApp')
  .controller('mainCtrl',function ($scope,$location,mainFct,searchSvc) {

    localStorage.clear();

    function wrapWindowByMask() {
      //화면의 높이와 너비를 구한다.
      var maskHeight = $(document).height();
//      var maskWidth = $(document).width();
      var maskWidth = window.document.body.clientWidth;

      var mask = '<div id="mask" style="position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;"></div>';
      var loadingImg = '';

      loadingImg += '<div id="loadingImg" style="position:absolute; left:48%; top:43%; display:none; z-index:10000;">';
      loadingImg += '<img src="images/loading.gif"/>';
      loadingImg += '</div>';

      //화면에 레이어 추가
      $('body')
        .append(mask)
        .append(loadingImg);

      //마스크의 높이와 너비를 화면 것으로 만들

      // 어 전체 화면을 채운다.
      $('#mask').css({
        'width' : maskWidth,
         'height': maskHeight,
         'opacity' : '0.3'
      });

      //마스크 표시
      $('#mask').show();

      //로딩중 이미지 표시
      $('#loadingImg').show();
    }


    function closeWindowByMask() {
      $('#mask, #loadingImg').hide();
      $('#mask, #loadingImg').remove();
    }



    $scope.options = {};

    //검색하는 기능
    $scope.test = function () {

      // console.log('로컬 스토리지');
      // console.log(localStorage.getItem('email'));
      // var e = localStorage.getItem('email');
      // if(e===null){
      //   var name = prompt('사용하시려면 email을 입력해 주세요');
      //   localStorage.setItem('email',name);
      // }


      wrapWindowByMask();

      if(isNaN($scope.options.money)){
        $scope.options.money = 0;

      }
      $scope.options.pageNo = 1;
      $scope.options.money = parseInt($scope.options.money);

      // alert('hell');

      $scope.options.pageNo = 1;
      $scope.options.sort =1;

      searchSvc.setOption($scope.options);


      // 검색하고 성공하면 서비스에 객체를 저장해 놓고 페이지를 넘긴다음 서비스에서 건내 받는다
      mainFct.postSearch($scope.options)
        .then(function (response) {
          response.data.allprice = $scope.options.money;
          // console.log(response);
          searchSvc.setSearch(response.data);
          closeWindowByMask();
          $location.path('/list'); //어떻게 다음화면에 받아온 걸 넘기지??
        });




    };




});
