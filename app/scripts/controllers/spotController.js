'use strict';

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

  //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
  $('#mask').css({
    'width': maskWidth,
    'height': maskHeight,
    'opacity': '0.3'
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


angular.module('triphowmuchApp')
  .controller('spotCtrl', function ($scope, $routeParams, spotFct) {

    wrapWindowByMask();

    spotFct.getSpot($routeParams.cntID)
      .then(function (response) {
        $scope.detail = response.data;
        closeWindowByMask();
      });

  });

angular.module('triphowmuchApp')
  .controller('listCtrl', function ($scope, spotFct, $location) {

    var email = '1';
    $scope.prices = [];
    $scope.titles = [];
    var delcarts = [];

    // $scope.lists.num = [];
    var temp = 0;

    wrapWindowByMask();


    // 저장된 여행지 불러오기
    spotFct.getList(email)
      .then(function (response) {
        $scope.lists = response.data;


        for (var i = 0; i < ($scope.lists).length; i++) {
          for (var j = 0; j < ($scope.lists[i].area).length; j++) {
            temp += $scope.lists[i].area[j].price;
            $scope.lists[i].checked = false;
          }


          for (var k = 0; k < ($scope.lists[i].stay).length; k++) {
            temp += $scope.lists[i].stay[k].price;
          }

          $scope.prices.push(temp);
          $scope.titles.push($scope.lists[i].title);
          temp = 0;

          closeWindowByMask();

        }

        closeWindowByMask();


      });


    // 체크박스 초기화


    // 저장된 여행지의 목록 불러오기
    $scope.listDetail = function (index) {
      $location.path('/spotList/detail/' + index);


    };


    // 저장된 여행지 체크박스 클릭시
    $scope.listSelect = function (index) {

      $scope.lists[index].checked = !$scope.lists[index].checked;


    };


    // 카트 삭제하기
    $scope.delCart = function () {

      var bool = confirm('저장한 여행지를 삭제하시겠습니까?');

      if (bool) {
        var len = ($scope.lists).length;
        for (var i = 0; i < len; i++) {
          if ($scope.lists[i].checked === true) {
            delcarts.push($scope.lists[i].num);
          }
        }

        spotFct.delCarts(delcarts)
          .then(function () {
            alert('삭제가 완료 되었습니다');
            location.reload();
          });


      } else {
        return;
      }

    };
  });

angular.module('triphowmuchApp')
  .controller('spotlistCtrl', function ($scope, $routeParams, spotFct) {


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

      //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
      $('#mask').css({
        'width': maskWidth,
        'height': maskHeight,
        'opacity': '0.3'
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


    // $scope.sspots = [];

    var spots = [];
    var len;


    wrapWindowByMask()
    spotFct.getSpotlist($routeParams.num)
      .then(function (response) {
        $scope.sspots = response.data.area;

        for (var i = 0; i < (response.data.stay).length; i++) {
          $scope.sspots.push(response.data.stay[i]);
        }
        $scope.name = response.data.title;


        len = ($scope.sspots).length;

        for (var j = 0; j < len; j++) {
          $scope.sspots[j].checked = false;
        }

        closeWindowByMask();

      });

    $scope.spotSelect = function (index) {
      $scope.sspots[index].checked = !$scope.sspots[index].checked;
    };


    $scope.delspot = function () {

      var del = confirm('선택항목을 삭제하시겠습니까?');

      if (del) {
        for (var i = 0; i < len; i++) {

          //여행지이면서 체크된경우
          if ($scope.sspots[i].checked === true) {
            spots.push($scope.sspots[i].contentid);
          }


        }
        spotFct.delSpots(spots, $routeParams.num)
          .then(function () {
            alert('삭제완료');
            location.reload();
          });
      } else {
        return;
      }

    };


    $scope.spotDetail = function (cntID, type) {

      var popUrl;
      // 여행지의 경우
      if (type === 0) {
        popUrl = '#!/list/' + cntID;	//팝업창에 출력될 페이지 URL
      } else {
        popUrl = '#!/hotel/' + cntID;

      }

      var popOption = 'width=700, height=700, resizable=no, scrollbars=no, status=no;';    //팝업창 옵션(optoin)

      window.open(popUrl, '223', popOption);
    };


  });

