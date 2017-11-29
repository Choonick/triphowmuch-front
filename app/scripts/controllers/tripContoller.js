'use strict';

angular.module('triphowmuchApp')
  .controller('tripCtrl', function ($scope, $location, mainFct, searchSvc) {

    //시군구 모음집






    $scope.regions = [
      {
        region: 1,
        sub: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구',
          '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구',
          '종로구', '중구', '중랑구']
      },
      {
        region: 2,
        sub: ['강화군', '계양구', '남구', '남동구', '동구', '부평구', '서구', '연수구', '옹진군', '중구']
      },
      {
        region: 3,
        sub: ['대덕구', '동구', '서구', '유성구', '중구']
      },
      {
        region: 4,
        sub: ['남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구']
      },
      {
        region: 5,
        sub: ['광산구', '남구', '동구', '북구', '서구']
      },
      {
        region: 6,
        sub: ['강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구',
          '영도구', '중구', '해운대구']
      },
      {
        region: 7,
        sub: ['중구', '남구', '동구', '북구', '울주군']
      },
      {
        region: 8,
        sub: ['세종특별자치시']
      },
      {
        region: 31,
        sub: ['가평군', '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시',
          '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시', '양주시', '양평군', '여주시', '연천군', '오산시', '용인시',
          '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시']
      },
      {
        region: 32,
        sub: ['강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군',
          '철원군', '춘천시', '태백시', '평창군', '홍천군', '화천군', '횡성군']
      },
      {
        region: 33,
        sub: ['괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '진천군', '청원군', '청주시', '충주시', '증평군']
      },
      {
        region: 34,
        sub: ['공주시', '금산군', '논산시', '당진시', '보령시', '부여군', '서산시', '서천군', '아산시', '예산군', '천안시', '청양군',
          '태안군', '홍성군', '계룡시']
      },
      {
        region: 35,
        sub: ['경산시', '경주시', '고령군', '구미시', '군위군', '김천시', '문경시', '봉화군', '상주시', '성주군', '안동시', '영덕군',
          '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시']
      },
      {
        region: 36,
        sub: ['거제시', '거창군', '고성군', '김해시', '마산시', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '진해시', '창녕군', '통영시',
          '하동군', '함안군', '함양군', '합천군']
      },
      {
        region: 37,
        sub: ['고창군', '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '완주군', '익산시', '임실군', '장수군', '전주시',
          '정읍시', '진안군']
      },
      {
        region: 38,
        sub: ['강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시',
          '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군']
      },
      {
        region: 39,
        sub: ['남제주군', '북제주군', '서귀포시', '제주시']
      }


    ];

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











    $scope.domi = false;
    $scope.trip = true;
    $scope.kinds = '여행지';
    $scope.options = {};

    $scope.options = searchSvc.getOption($scope.options);
    console.log('선택옵션들');
    console.log($scope.options);




    // 데이터 받아오는 부분
    $scope.spots = {};
    $scope.domis = {};

    $scope.spots = searchSvc.getSearch();




    // $scope.hprice(){
    //   wrapWindowByMask();
    //
    //   // 여행지 검색하는 부분
    //
    //   $scope.options.pageNo = 1;
    //
    //
    //   if($scope.options.money===undefined) {
    //     $scope.options.money = 0;
    //   }
    //
    //   $scope.options.sort = 1;
    //
    //   mainFct.postSearch(options)
    //     .then(function (response) {
    //       $scope.spots = response.data;
    //       $scope.spots.allprice = $scope.options.money;
    //       console.log('전체검색 결과');
    //       console.log($scope.spots);
    //
    //
    //     });
    //
    // };



    // 다시 찾기
    $scope.newSearch = function (options) {


      wrapWindowByMask();

      // 여행지 검색하는 부분

      $scope.options.pageNo = 1;


      if($scope.options.money===undefined) {
        $scope.options.money = 0;
      }

        console.log('재검색 옵션들');
        console.log(options);

      mainFct.postSearch(options)
        .then(function (response) {
          $scope.spots = response.data;
          $scope.spots.allprice = $scope.options.money;
          console.log('전체검색 결과');
          console.log($scope.spots);


        });


      // 숙소 검색하는 부분
      var domi = {
        areaCode:options.areaCode,
        sigunguCode:options.sigunguCode,
        pageNo:1,
        money:$scope.options.money,
        sort:1
      };

      mainFct.getHotel(domi)
        .then(function (response) {

          $scope.domis = response.data;
          console.log($scope.domis);

          closeWindowByMask();


        });


      // 페이징
      // $('.pagination').empty();
      // var pagenum = parseInt($scope.spots[10].cnt / 10) + 1;
      // console.log(pagenum);//서버에서 값을 받아오는 부분
      //
      // var tag = '<li><a>1</a></li>';
      //
      // for (var i = 0; i < pagenum; i++) {
      //   $('.pagination').append(tag);//3개를 추가한다
      // }
      //
      // for (var j = 0; j < pagenum; j++) {
      //   $('.pagination').children().children().eq(j).text(j + 1);
      //   $('.pagination').children().children().eq(j).attr('href', LOCAL + '/#!/Content_list/' + (j + 1));
      // }
      //


    };

    console.log('여기기');
    console.log($scope.spots);


    //클릭 체크 초기화
    // 여행지체크 초기화
    var len = ($scope.spots).length;
    for (var i = 0; i < len; i++) {
      $scope.spots[i].checked = false;
    }

    // 숙소체크 초기화
    var len2 = ($scope.domis).length;
    for (var j = 0; j < len2; j++) {
      $scope.domis[i].checked = false;
    }


    // 숙소 버튼 클릭 시
    $scope.clDomi = function () {

      console.log($scope.domis[0]);

      if($scope.options.areaCode === null && $scope.options.sigunguCode === null){
        alert('지역 선택을 해주세요');
      }

      $scope.kinds = '숙소';
      $scope.domi = true;
      $scope.trip = false;
      $('#spot').css('background-color', '#FFFFFF');
      $('#spot').css('color', '#c9c9c9');
      $('#domi').css('background-color', '#80cdea');
      $('#domi').css('color', '#FFFFFF');


    };


    // 여행지 버튼 클릭 시
    $scope.clTrip = function () {

      $scope.kinds = '여행지';
      $scope.domi = false;
      $scope.trip = true;
      $('#spot').css('background-color', '#80cdea');
      $('#spot').css('color', '#FFFFFF');
      $('#domi').css('background-color', '#FFFFFF');
      $('#domi').css('color', '#c9c9c9');

    };


// 여행지 찾기 완료 클릭시
    $scope.goCart = function () {
      var ids = [];
      var dids = [];
      var savedspots = [];

      console.log('로컬 스토리지');
      console.log(localStorage.getItem('email'));
      var e = localStorage.getItem('email');
      if(e===null){
        var name = prompt('사용하시려면 email을 입력해 주세요');
        localStorage.setItem('email',name);
      }





      // if (bool) {
        // console.log($scope.spots);
        var name = prompt('여행지 이름을 입력하세요');

      if(name === null){
        return;
      }

        wrapWindowByMask();

        for (var i = 0; i < ($scope.spots).length; i++) {
          if ($scope.spots[i].checked === true) {
            ids.push($scope.spots[i].contentid);
            savedspots.push($scope.spots[i]);
          }
        }

        for (var j = 0; j < ($scope.domis).length; j++) {
          if ($scope.domis[j].checked === true) {
            dids.push($scope.domis[j].contentid);
            savedspots.push($scope.domis[j]);
          }
        }


        savedspots.push(name);




        console.log(ids);
        console.log(savedspots);
        var cart = {
          area: ids,
          stay: dids,
          title: name
        };


        console.log(cart);
        // 여행지를 모아 카트를 만들기
        mainFct.postCart(cart)
          .then(function (response) {
            // alert('성공');
            console.log(savedspots);
            searchSvc.setSearch(savedspots);
            console.log(response.data.num);
            closeWindowByMask();
            $location.path('/spotList/detail/'+response.data.num);


          });


      // } else {
      //   alert('취소');
      // }
    };


    //숙소 이미지 클릭시
    // $scope.domiSelect = function () {
    //   alert('숙소 예정');
    //
    // };


    //숙소 클릭시 체크박스 초기화
    // $scope.goInit = function (domi, index) {
    //   // 숙소체크 초기화
    //   var len2 = ($scope.domis).length;
    //   for (var j = 0; j < len2; j++) {
    //     $scope.domis[i].checked = false;
    //   }
    //   $scope.domis[index].checked = true;
    // };


    // 숙소 체크박스 클릭시
    $scope.domiSelect = function (domi, index) {
      console.log($scope.domis);
      console.log(domi);

      $scope.domis[index].checked = !$scope.domis[index].checked;

      if ($scope.domis[index].checked === true) {
        $scope.spots.allprice -= $scope.domis[index].price;
      }
      else {
        $scope.spots.allprice += $scope.domis[index].price;
      }

    };

    //숙소 상세보기
    $scope.domiDetail = function (cntID) {
      console.log(cntID);
      // $location.path('/list/'+cntID);

      var popUrl = '#!/hotel/'+cntID;	//팝업창에 출력될 페이지 URL

      var popOption = 'width=700, height=700, resizable=no, scrollbars=no, status=no;';    //팝업창 옵션(optoin)

      window.open(popUrl,'223',popOption);

    };





    // 여행지 체크박스 클릭시
    $scope.spotSelect = function (spot, index) {

      $scope.spots[index].checked = !$scope.spots[index].checked;

      if ($scope.spots[index].checked === true) {
        $scope.spots.allprice -= $scope.spots[index].price;
      }
      else {
        $scope.spots.allprice += $scope.spots[index].price;
      }

    };

    //여행 이미지 클릭 시
    $scope.spotDetail = function (cntID) {
      console.log(cntID);

      var popUrl = '#!/list/'+cntID;	//팝업창에 출력될 페이지 URL

      var popOption = 'width=700, height=700, resizable=no, scrollbars=no, status=no;';    //팝업창 옵션(optoin)

      window.open(popUrl,'223',popOption);

    };


  });
