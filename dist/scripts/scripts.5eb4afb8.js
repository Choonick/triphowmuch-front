"use strict";function wrapWindowByMask(){var a=$(document).height(),b=window.document.body.clientWidth,c='<div id="mask" style="position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;"></div>',d="";d+='<div id="loadingImg" style="position:absolute; left:48%; top:43%; display:none; z-index:10000;">',d+='<img src="images/loading.3da51f67.gif"/>',d+="</div>",$("body").append(c).append(d),$("#mask").css({width:b,height:a,opacity:"0.3"}),$("#mask").show(),$("#loadingImg").show()}function closeWindowByMask(){$("#mask, #loadingImg").hide(),$("#mask, #loadingImg").remove()}angular.module("triphowmuchApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).constant("BASE_URL","http://52.79.207.88:8000").config(["$httpProvider",function(a){a.defaults.headers.common={},a.defaults.headers.post={},a.defaults.headers.put={},a.defaults.headers.patch={}}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"mainCtrl"}).when("/list",{templateUrl:"views/main_selectDomi.html",controller:"tripCtrl",cache:!0}).when("/hotel/:cntID",{templateUrl:"views/hotel_detail.html",controller:"hotelCtrl",cache:!0}).when("/list/:cntID",{templateUrl:"views/spot_detail.html",controller:"spotCtrl"}).when("/savedSpot",{templateUrl:"views/savedSpot.html",controller:"listCtrl"}).when("/spotList/detail/:num",{templateUrl:"views/spotList_detail.html",controller:"spotlistCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("triphowmuchApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("triphowmuchApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("triphowmuchApp").controller("idxCtrl",["$scope","$location","loginFct",function(a,b,c){a.gohome=function(){b.path("/")},a.goCarts=function(){console.log("로컬 스토리지"),console.log(localStorage.getItem("email"));var a=localStorage.getItem("email");if(console.log(a),null===a){var c=prompt("사용하시려면 email을 입력해 주세요");null!==c&&(localStorage.setItem("email",c),b.path("/savedSpot"))}else b.path("/savedSpot")}}]),angular.module("triphowmuchApp").controller("mainCtrl",["$scope","$location","mainFct","searchSvc",function(a,b,c,d){function e(){var a=$(document).height(),b=window.document.body.clientWidth,c='<div id="mask" style="position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;"></div>',d="";d+='<div id="loadingImg" style="position:absolute; left:48%; top:43%; display:none; z-index:10000;">',d+='<img src="images/loading.3da51f67.gif"/>',d+="</div>",$("body").append(c).append(d),$("#mask").css({width:b,height:a,opacity:"0.3"}),$("#mask").show(),$("#loadingImg").show()}function f(){$("#mask, #loadingImg").hide(),$("#mask, #loadingImg").remove()}localStorage.clear(),a.options={},a.test=function(){e(),isNaN(a.options.money)&&(a.options.money=0),a.options.pageNo=1,a.options.money=parseInt(a.options.money),a.options.pageNo=1,a.options.sort=1,d.setOption(a.options),c.postSearch(a.options).then(function(c){c.data.allprice=a.options.money,d.setSearch(c.data),f(),b.path("/list")})}}]),angular.module("triphowmuchApp").controller("tripCtrl",["$scope","$location","mainFct","searchSvc",function(a,b,c,d){function e(){var a=$(document).height(),b=window.document.body.clientWidth,c='<div id="mask" style="position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;"></div>',d="";d+='<div id="loadingImg" style="position:absolute; left:48%; top:43%; display:none; z-index:10000;">',d+='<img src="images/loading.3da51f67.gif"/>',d+="</div>",$("body").append(c).append(d),$("#mask").css({width:b,height:a,opacity:"0.3"}),$("#mask").show(),$("#loadingImg").show()}function f(){$("#mask, #loadingImg").hide(),$("#mask, #loadingImg").remove()}a.regions=[{region:1,sub:["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]},{region:2,sub:["강화군","계양구","남구","남동구","동구","부평구","서구","연수구","옹진군","중구"]},{region:3,sub:["대덕구","동구","서구","유성구","중구"]},{region:4,sub:["남구","달서구","달성군","동구","북구","서구","수성구","중구"]},{region:5,sub:["광산구","남구","동구","북구","서구"]},{region:6,sub:["강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구"]},{region:7,sub:["중구","남구","동구","북구","울주군"]},{region:8,sub:["세종특별자치시"]},{region:31,sub:["가평군","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","양평군","여주시","연천군","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시"]},{region:32,sub:["강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군","정선군","철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군"]},{region:33,sub:["괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","진천군","청원군","청주시","충주시","증평군"]},{region:34,sub:["공주시","금산군","논산시","당진시","보령시","부여군","서산시","서천군","아산시","예산군","천안시","청양군","태안군","홍성군","계룡시"]},{region:35,sub:["경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군","안동시","영덕군","영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시"]},{region:36,sub:["거제시","거창군","고성군","김해시","마산시","밀양시","사천시","산청군","양산시","의령군","진주시","진해시","창녕군","통영시","하동군","함안군","함양군","합천군"]},{region:37,sub:["고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군","장수군","전주시","정읍시","진안군"]},{region:38,sub:["강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군","순천시","신안군","여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"]},{region:39,sub:["남제주군","북제주군","서귀포시","제주시"]}],a.domi=!1,a.trip=!0,a.kinds="여행지",a.options={},a.options=d.getOption(a.options),console.log("선택옵션들"),console.log(a.options),a.spots={},a.domis={},a.spots=d.getSearch(),a.newSearch=function(b){e(),a.options.pageNo=1,void 0===a.options.money&&(a.options.money=0),console.log("재검색 옵션들"),console.log(b),c.postSearch(b).then(function(b){a.spots=b.data,a.spots.allprice=a.options.money,console.log("전체검색 결과"),console.log(a.spots)});var d={areaCode:b.areaCode,sigunguCode:b.sigunguCode,pageNo:1,money:a.options.money,sort:1};c.getHotel(d).then(function(b){a.domis=b.data,console.log(a.domis),f()})},console.log("여기기"),console.log(a.spots);for(var g=a.spots.length,h=0;g>h;h++)a.spots[h].checked=!1;for(var i=a.domis.length,j=0;i>j;j++)a.domis[h].checked=!1;a.clDomi=function(){console.log(a.domis[0]),null===a.options.areaCode&&null===a.options.sigunguCode&&alert("지역 선택을 해주세요"),a.kinds="숙소",a.domi=!0,a.trip=!1,$("#spot").css("background-color","#FFFFFF"),$("#spot").css("color","#c9c9c9"),$("#domi").css("background-color","#80cdea"),$("#domi").css("color","#FFFFFF")},a.clTrip=function(){a.kinds="여행지",a.domi=!1,a.trip=!0,$("#spot").css("background-color","#80cdea"),$("#spot").css("color","#FFFFFF"),$("#domi").css("background-color","#FFFFFF"),$("#domi").css("color","#c9c9c9")},a.goCart=function(){var g=[],h=[],i=[];console.log("로컬 스토리지"),console.log(localStorage.getItem("email"));var j=localStorage.getItem("email");if(null===j){var k=prompt("사용하시려면 email을 입력해 주세요");localStorage.setItem("email",k)}var k=prompt("여행지 이름을 입력하세요");if(null!==k){e();for(var l=0;l<a.spots.length;l++)a.spots[l].checked===!0&&(g.push(a.spots[l].contentid),i.push(a.spots[l]));for(var m=0;m<a.domis.length;m++)a.domis[m].checked===!0&&(h.push(a.domis[m].contentid),i.push(a.domis[m]));i.push(k),console.log(g),console.log(i);var n={area:g,stay:h,title:k};console.log(n),c.postCart(n).then(function(a){console.log(i),d.setSearch(i),console.log(a.data.num),f(),b.path("/spotList/detail/"+a.data.num)})}},a.domiSelect=function(b,c){console.log(a.domis),console.log(b),a.domis[c].checked=!a.domis[c].checked,a.domis[c].checked===!0?a.spots.allprice-=a.domis[c].price:a.spots.allprice+=a.domis[c].price},a.domiDetail=function(a){console.log(a);var b="#!/hotel/"+a,c="width=700, height=700, resizable=no, scrollbars=no, status=no;";window.open(b,"223",c)},a.spotSelect=function(b,c){a.spots[c].checked=!a.spots[c].checked,a.spots[c].checked===!0?a.spots.allprice-=a.spots[c].price:a.spots.allprice+=a.spots[c].price},a.spotDetail=function(a){console.log(a);var b="#!/list/"+a,c="width=700, height=700, resizable=no, scrollbars=no, status=no;";window.open(b,"223",c)}}]),angular.module("triphowmuchApp").controller("spotCtrl",["$scope","$routeParams","spotFct",function(a,b,c){wrapWindowByMask(),c.getSpot(b.cntID).then(function(b){a.detail=b.data,closeWindowByMask()})}]),angular.module("triphowmuchApp").controller("listCtrl",["$scope","spotFct","$location",function(a,b,c){var d="1";a.prices=[],a.titles=[];var e=[],f=0;wrapWindowByMask(),b.getList(d).then(function(b){a.lists=b.data;for(var c=0;c<a.lists.length;c++){for(var d=0;d<a.lists[c].area.length;d++)f+=a.lists[c].area[d].price,a.lists[c].checked=!1;for(var e=0;e<a.lists[c].stay.length;e++)f+=a.lists[c].stay[e].price;a.prices.push(f),a.titles.push(a.lists[c].title),f=0,closeWindowByMask()}closeWindowByMask()}),a.listDetail=function(a){c.path("/spotList/detail/"+a)},a.listSelect=function(b){a.lists[b].checked=!a.lists[b].checked},a.delCart=function(){var c=confirm("저장한 여행지를 삭제하시겠습니까?");if(c){for(var d=a.lists.length,f=0;d>f;f++)a.lists[f].checked===!0&&e.push(a.lists[f].num);b.delCarts(e).then(function(){alert("삭제가 완료 되었습니다"),location.reload()})}}}]),angular.module("triphowmuchApp").controller("spotlistCtrl",["$scope","$routeParams","spotFct",function(a,b,c){function d(){var a=$(document).height(),b=window.document.body.clientWidth,c='<div id="mask" style="position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;"></div>',d="";d+='<div id="loadingImg" style="position:absolute; left:48%; top:43%; display:none; z-index:10000;">',d+='<img src="images/loading.3da51f67.gif"/>',d+="</div>",$("body").append(c).append(d),$("#mask").css({width:b,height:a,opacity:"0.3"}),$("#mask").show(),$("#loadingImg").show()}function e(){$("#mask, #loadingImg").hide(),$("#mask, #loadingImg").remove()}var f,g=[];d(),c.getSpotlist(b.num).then(function(b){a.sspots=b.data.area;for(var c=0;c<b.data.stay.length;c++)a.sspots.push(b.data.stay[c]);a.name=b.data.title,f=a.sspots.length;for(var d=0;f>d;d++)a.sspots[d].checked=!1;e()}),a.spotSelect=function(b){a.sspots[b].checked=!a.sspots[b].checked},a.delspot=function(){var d=confirm("선택항목을 삭제하시겠습니까?");if(d){for(var e=0;f>e;e++)a.sspots[e].checked===!0&&g.push(a.sspots[e].contentid);c.delSpots(g,b.num).then(function(){alert("삭제완료"),location.reload()})}},a.spotDetail=function(a,b){var c;c=0===b?"#!/list/"+a:"#!/hotel/"+a;var d="width=700, height=700, resizable=no, scrollbars=no, status=no;";window.open(c,"223",d)}}]),angular.module("triphowmuchApp").controller("hotelCtrl",["$scope","$routeParams","spotFct",function(a,b,c){console.log(b.cntID),c.getHoDetail(b.cntID).then(function(b){a.detail=b.data})}]),angular.module("triphowmuchApp").controller("loginCtrl",["$scope","$routeParams","loginFct",function(a,b,c){c.login(localStorage.getItem("email"))}]),angular.module("triphowmuchApp").factory("mainFct",["$http","BASE_URL",function(a,b){return{postSearch:function(c){var d={params:c};return a.get(b+"/area/search",d)},postCart:function(c){return a.post(b+"/cart/"+localStorage.getItem("email"),c)},getSaved:function(){return a.get(b+"/cart/"+localStorage.getItem("email"))},getHotel:function(c){var d={params:c};return a.get(b+"/stay/search",d)}}}]),angular.module("triphowmuchApp").factory("spotFct",["$http","BASE_URL",function(a,b){return{getSpot:function(c){return a.get(b+"/area/"+c)},getHoDetail:function(c){return a.get(b+"/stay/"+c)},getList:function(){return a.get(b+"/cart/"+localStorage.getItem("email"))},getSpotlist:function(c){return a.get(b+"/cart/"+localStorage.getItem("email")+"/"+c)},delCarts:function(c){return a["delete"](b+"/cart/"+localStorage.getItem("email"),{data:{num:c}})},delSpots:function(c,d){return a["delete"](b+"/cart/"+localStorage.getItem("email")+"/"+d,{data:{contents:c}})}}}]),angular.module("triphowmuchApp").factory("loginFct",["$http","BASE_URL",function(a,b){return{login:function(c){var d={email:c,key:"2"};return console.log(d),a.post(b+"/login",d)}}}]),angular.module("triphowmuchApp").service("searchSvc",["$http","BASE_URL",function(a,b){var c={},d={};return{setSearch:function(a){console.log("set 하기전"),console.log(a),c={},c=a,console.log("setSearch결과보기"),console.log(c)},getSearch:function(){return c},setOption:function(a){d=a},getOption:function(){return d}}}]),angular.module("triphowmuchApp").run(["$templateCache",function(a){a.put("views/hotel_detail.html",'<link rel="stylesheet" href="styles/spot_detail.css"> <!-- 요소 --> <div id="spotSpace"> <!-- 여행지 사진 영역 --> <div id="travelImageSpace"> <!-- 아이템 원 --> <div class="itemCircle"> <!-- 체크표시 --> <img class="checkCircle" src="images/check(blue).585e5649.png"> </div> <!-- 아이템 원 끝 --> <!-- 이미지 영역 --> <div id="imageSpace"> <img src="{{detail.firstimage}}"> </div> <!-- 이미지 영역 끝 --> </div> <!-- 여행지 사진 영역 끝 --> <!-- 여행지 상세정보 영역 --> <!--<div id="detailSpace" style="overflow: auto;height: 50%">--> <!-- 제목 영역 --> <div id="titleSpace"> <p id="title">{{detail.title}} </p></div> <div id="contentSpace"> <div id="moneySpace" style="height: 10%"> <div class="contentNameSpace"> <button type="button">가격</button> </div> <div class="contentValueSpace"> <img src="../images/won.3a176151.png"> <p id="itemText">{{detail.price}}</p> </div> </div> <!--<div class="whiteSpace"></div>--> <div id="addressSpace" style="height: 10%"> <div class="contentNameSpace"> <button type="button">주소</button> </div> <div class="contentValueSpace"> <p class="value">{{detail.addr1}} {{detail.addr2}}</p> </div> </div> <div id="infoSpace" style="height: 10%"> <div class="contentNameSpace"> <button type="button">정보</button> </div> <div class="contentValueSpace"> <p class="value">{{detail.overview}}</p> </div> </div> <div class="whiteSpace"></div> </div> <!-- 내용 영역 끝 --> </div> <!-- 여행지 상세정보 영역 끝 --> <!--</div>-->'),a.put("views/main.html",'<!-- 요소 --> <div id="wrapper"> <!-- 메인 --> <div id="main"> <!-- 메인 이미지 --> <div class="mainImage"> <!-- 이미지 --> <img id="backImage" src="images/mainpage.ad92044a.png" style="border-radius: 0px"> </div> <!-- 메인 이미지 끝 --> <!-- 메인 텍스트 --> <div class="mainText"> <!-- 텍스트 --> <span id="backText">선선한 가을,<br>우리 함께 떠나볼까요?</span> </div> <!-- 메인 이미지 텍스트 끝 --> </div> <!-- 메인 끝 --> </div> <!-- 요소 끝 --> <!-- 공백 --> <div id="whiteSpace"> <!-- 버튼 세개 --> <div id="threeButton"> <!-- 여행 타입 --> <div id="type"> <!-- 여행 타입 select box --> <select id="travelType" class="select" ng-model="options.cat1"> <option value="" disabled selected>여행 타입</option> <option value="A01">자연</option> <option value="A02">인문(문화/예술/역사)</option> <option value="0">선택안함</option> </select> </div> <!-- 여행 타입 끝 --> <!-- 지역 선택 --> <!--비어있는 상태--> <!--자연코드 선택시--> <!--인문코드 선택시--> <div id="region"> <!-- 지역 선택 select box --> <select id="regionSelect" class="select" ng-model="options.areaCode" value=""> <option value="" disabled selected>지역 선택</option> <option value="1">서울</option> <option value="2">인천</option> <option value="3">대전</option> <option value="4">대구</option> <option value="5">광주</option> <option value="6">부산</option> <option value="7">울산</option> <option value="8">세종특별자치시</option> <option value="31">경기도</option> <option value="32">강원도</option> <option value="33">충청북도</option> <option value="34">충청남도</option> <option value="35">경상북도</option> <option value="36">경상남도</option> <option value="37">전라북도</option> <option value="38">전라남도</option> <option value="39">제주도</option> <option value="0">선택안함</option> </select> </div> <!-- 지역 선택 끝 --> <!-- 나의 예산 --> <div id="money"> <!-- 나의 예산 input --> <input type="text" id="myMoney" placeholder="나의 예산" ng-model="options.money"> </div> <!-- 나의 예산 끝 --> </div> <!-- 버튼 세개 끝 --> <!-- 검색 버튼 --> <div id="search"> <!-- 버튼 --> <button type="button" id="searchButton" ng-click="test()">검색</button> </div> <!-- 검색 버튼 끝 --> </div> <!-- 공백 끝-->'),a.put("views/main_selectDomi.html",'<!--<link rel="stylesheet" href="styles/mainselectDomi.css"/>--> <style></style> <!-- 요소 --> <div id="wrapper"> <!-- 상위 바 --> <!-- 내용 --> <div id="bottom"> <!-- 왼쪽 공백 --> <div id="whiteSpaceLeft"></div> <!-- 왼쪽 공백 끝 --> <!-- 콘텐츠 --> <div id="content"> <!-- 조건 영역 --> <div id="conditionSpace"> <!-- 조건 1 영역 --> <div id="conditionOne"> <!-- 버튼 내용 영역 --> <div id="buttonContent"> <!-- 여행 타입 영역 --> <div class="twoButton"> <!-- 여행 타입_대분류 --> <div id="bigTravelType"> <!-- 대분류 select box --> <select id="bigType" class="select" ng-model="options.cat1"> <option value="" disabled selected>여행 타입-대분류</option> <option value="0">선택안함</option> <option value="A01">자연</option> <option value="A02">인문(문화/예술/역사)</option> </select> </div> <!-- 여행 타입_대분류 끝 --> <!-- 여행 타입_중분류 --> <div id="middleTravelType" ng-if="options.cat1==null"> <!-- 중분류 select box --> <select id="middleType" class="select" ng-model="options.cat2"> <option value="" disabled selected>여행 타입-중분류</option> </select> </div> <div id="middleTravelType" ng-if="options.cat1===\'A01\'"> <!-- 중분류 select box --> <select id="middleType" class="select" ng-model="options.cat2"> <option value="" disabled selected>여행 타입-중분류</option> <option value="A0101">자연관광지</option> <option value="A0102">관광자원</option> <option value="0">선택안함</option> </select> </div> <div id="middleTravelType" ng-if="options.cat1===\'A02\'"> <!-- 중분류 select box --> <select id="middleType" class="select" ng-model="options.cat2"> <option value="" disabled selected>여행 타입-중분류</option> <option value="A0201">역사관광지</option> <option value="A0202">휴양관광지</option> <option value="A0203">체험관광지</option> <option value="A0204">산업관광지</option> <option value="A0205">건축/조형물</option> <option value="A0206">문화시설</option> <option value="0">선택안함</option> </select> </div> <!-- 여행 타입_중분류 끝 --> </div> <!-- 여행 타입 영역 끝 --> <!-- 지역 선택 영역 --> <div class="twoButton"> <!-- 지역 선택_대분류 --> <div id="bigRegionType"> <!-- 지역선택_대분류 select box --> <select id="bigRegion" class="select" ng-model="options.areaCode"> <option value="" disabled selected>지역 선택-대분류</option> <option id="test" value="1">서울</option> <option value="2">인천</option> <option value="3">대전</option> <option value="4">대구</option> <option value="5">광주</option> <option value="6">부산</option> <option value="7">울산</option> <option value="8">세종특별자치시</option> <option value="31">경기도</option> <option value="32">강원도</option> <option value="33">충청북도</option> <option value="34">충청남도</option> <option value="35">경상북도</option> <option value="36">경상남도</option> <option value="37">전라북도</option> <option value="38">전라남도</option> <option value="39">제주도</option> <option value="0">선택안함</option> </select> </div> <!-- 지역 선택_대분류 끝 --> <!-- 지역 선택_중분류 --> <div id="middleRegionType" ng-if="options.areaCode==null"> <!-- 지역선택_중분류 select box --> <select id="middleRegion" class="select" ng-model="options.sigunguCode"> <option value="" disabled selected>지역 선택-중분류</option> </select> </div> <div id="middleRegionType" ng-repeat="rg in regions" ng-if="options.areaCode==rg.region"> <!-- 지역선택_중분류 select box --> <select id="middleRegion" class="select" ng-model="options.sigunguCode"> <option value="" disabled selected>지역 선택-중분류</option> <option value="{{$index+1}}" ng-repeat="gu in rg.sub">{{gu}}</option> </select> </div> <!-- 지역 선택_중분류 끝 --> </div> <!-- 지역 선택 영역 끝 --> <!-- 나의 예산 영역 --> <div class="twoButton"> <!-- 나의 예산 입력 텍스트 영역 --> <div id="inputMoneyText"> <!-- 텍스트 --> <p id="moneyText">나의 예산 입력</p> </div> <div id="inputMoney"> <!-- input --> <input id="inputText" type="text" ng-model="options.money"> <!-- 원 --> <p id="won">원</p> </div> <!-- 나의 예산 입력 input 끝 --> </div> <!-- 나의 예산 영역 끝 --> </div> <!-- 버튼 내용 영역 끝 --> <!-- 공백 영역 --> <div id="buttonWhiteSpace"> <!-- 공백 1 --> <div class="buttonWhiteSpace"></div> <!-- 공백 1 끝 --> <!-- 공백 2 --> <div class="buttonWhiteSpace"></div> <!-- 공백 2 끝 --> <!-- 버튼 영역 --> <div class="buttonWhiteSpace"> <!-- 다시 선택 버튼 공백 --> <div id="reSelectWhiteSpace"></div> <!-- 다시 선택 버튼 공백 끝 --> <!-- 다시 선택 버튼 영역 --> <div id="reSelectButtonSpace"> <!-- 버튼 --> <button type="button" id="reSelectButton" ng-click="newSearch(options)">다시 선택</button> </div> <!-- 다시 선택 버튼 영역 끝 --> </div> <!-- 버튼 영역 끝 --> </div> <!-- 공백 영역 끝 --> </div> <!-- 조건 1 영역 끝 --> <!-- 조건 2 영역 --> <div id="conditionTwo"> <!-- 버튼 내용 영역 --> <div id="buttonContentTwo"> <!-- 숙소 영역 --> <!-- 숙소 영역 끝 --> <!-- 여행지 영역 --> <div id="spotSpace_main"> <!-- 버튼 --> <button type="button" id="spot" ng-click="clTrip();"> 여행지 </button> </div> <!-- 여행지 영역 끝 --> <div id="domiSpace"> <!-- 버튼 --> <button type="button" id="domi" ng-click="clDomi();"> 숙소 </button> </div> </div> <!-- 버튼 내용 영역 끝 --> </div> <!-- 조건 2 영역 끝 --> </div> <!-- 조건 영역 끝 --> <!-- 정렬 영역 --> <!--<div>--> <div id="sort"> <p id="text">예산에 맞춘 {{kinds}} 추천</p> <!-- 텍스트 영역 --> <div id="textSpace"> </div> <!-- 텍스트 영역 끝 --> <!-- 정렬 영역 --> <div id="sortSpace"> <!-- 정렬 공백 영역 --> <div id="sortWhiteSpace"></div> <!-- 정렬 공백 영역 끝 --> <!-- 정렬 텍스트 영역 --> <div id="sortTextSpace"> <!-- 오름차순 영역 --> <div id="ascSpace"> <!-- 버튼 --> <button type="button" id="asc"></button> </div> <!-- 오름차순 영역 끝 --> <!-- 기호 영역 --> <div class="space"> <!-- 텍스트 --> <p class="spaceText"></p> </div> <!-- 기호 영역 끝 --> <!-- 내림차순 영역 --> <div id="descSpace"> <!-- 버튼 --> <button type="button" id="desc"></button> </div> <!-- 내림차순 영역 끝 --> </div> <!-- 정렬 텍스트 영역 끝 --> </div> <!-- 정렬 영역 끝 --> </div> <!--정렬 영역 끝--> <!--목록 영역--> <div id="listSpace" ng-if="domi===true"> <!-- 열 --> <div class="row" ng-repeat="domi in domis track by $index" ng-if="$index % 3 ==0"> <!-- 콘텐츠 1--> <div class="item" style="background: url({{domis[i].firstimage}}),url(\'images/defaultsmallsize.3c431783.png\'); background-size: auto auto,100% 100%; background-repeat: no-repeat" ng-repeat="i in [$index, $index+1,$index+2]" ng-if="domis[i].contentid != undefined"> <!-- 아이템 원 --> <!--과제 1 : ng-class를 이용한 코드 간결화--> <div class="itemCircle" ng-if="domis[i].checked == undefined" ng-click="domiSelect(domi,i);"> <img class="checkCircle" src="images/circle.282ee581.png"> </div> <div class="itemCircle" ng-if="domis[i].checked==true" ng-click="domiSelect(domi,i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/check(blue).585e5649.png" style="background: url(\'../images/circle.282ee581.png\');background-size: 100% 100%"> </div> <div class="itemCircle" ng-if="domis[i].checked==false" ng-click="domiSelect(domi,i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/circle.282ee581.png"> </div> <!-- 아이템 원 끝 --> <!-- 아이템 이미지 영역 --> <div class="itemImageSpace" ng-click="domiDetail(domis[i].contentid)"> <!-- 텍스트 --> <p class="itemText">{{domis[i].title}}</p> <!-- 이미지 --> <img class="itemImage" src="images/blur.4fd8879d.png"> </div> <!-- 아이템 이미지 영역 끝 --> </div> </div> </div> <div id="listSpace" ng-if="trip===true"> <!-- 열 --> <div class="row" ng-repeat="spot in spots track by $index" ng-if="$index % 3 ==0"> <!-- 콘텐츠 1--> <div class="item" ng-repeat="i in [$index, $index+1, $index+2]" ng-if="spots[i].contentid != undefined" ng-class="{\'default\':spots[i].firstimage == null}" style="background: url({{spots[i].firstimage}}),url(\'images/defaultsmallsize.3c431783.png\'); background-size: auto auto ,100% 100%; background-repeat: no-repeat"> <!-- 아이템 원 --> <!--과제 1 : ng-class를 이용한 코드 간결화--> <div class="itemCircle" ng-if="spots[i].checked == undefined" ng-click="spotSelect(spot,i);"> <img class="checkCircle" src="images/circle.282ee581.png"> </div> <div class="itemCircle" ng-if="spots[i].checked==true" ng-click="spotSelect(spot,i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/check(blue).585e5649.png" style="background: url(\'images/circle.282ee581.png\');background-size: 100% 100%"> </div> <div class="itemCircle" ng-if="spots[i].checked==false" ng-click="spotSelect(spot,i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/circle.282ee581.png"> </div> <!-- 아이템 원 끝 --> <!-- 아이템 이미지 영역 --> <div class="itemImageSpace" ng-click="spotDetail(spots[i].contentid)"> <!-- 텍스트 --> <p class="itemText">{{spots[i].title}}</p> <!-- 이미지 --> <img class="itemImage" src="images/blur.4fd8879d.png"> </div> <!-- 아이템 이미지 영역 끝 --> </div> </div> </div> <div style="text-align: center"> <ul class="pagination"> <!--<div id="paging" class="row">--> <!--</div>--> </ul> </div> <!--목록 영역 끝--> </div> <!--</div>--> <!-- 콘텐츠 끝 --> <!-- 오른쪽 공백 --> <div id="whiteSpaceRight"> <!-- 위 공백 --> <div id="upWhiteSpace"></div> <!-- 위 공백 끝 --> <!-- 계산기 부분--> <div id="calcul"> <!-- 계산기 영역 --> <div id="calculSpace"> <!-- 계산기 콘텐츠 --> <div id="calculContent"> <!-- 여행지 목록 --> <div id="spotList"> <!-- 여행지 --> <div class="travelSpot" ng-repeat="spot in spots" ng-if="spot.checked===true"> <div class="nameSpace"> <p class="spotName">{{spot.title}}</p> </div> <div class="numberSpace"> <p class="numberEqual"> - </p> <p class="numberResult"> {{spot.price}} </p> </div> </div> <div class="travelSpot" ng-repeat="domi in domis" ng-if="domi.checked===true"> <div class="nameSpace"> <p class="spotName">{{domi.title}}</p> </div> <div class="numberSpace"> <p class="numberEqual"> - </p> <p class="numberResult"> {{domi.price}} </p> </div> </div> <!-- 여행지 끝 --> </div> <!-- 여행지 목록 끝 --> <!-- 결과 --> <div class="resultSpace"> <p class="equal"> = </p> <p class="result"> {{spots.allprice}} </p> </div> <!-- 결과 끝 --> </div> <!-- 계산기 콘텐츠 끝 --> <!-- 여행 찾기 완료 영역 --> <div id="finishSpace"> <!-- 버튼 공백 --> <div class="buttonWhiteSpace2"></div> <!-- 버튼 공백 끝 --> <!-- 버튼 --> <button id="finish" ng-click="goCart();">여행 찾기 완료</button> <!-- 버튼 끝 --> <!-- 버튼 공백 --> <div class="buttonWhiteSpace2"></div> <!-- 버튼 공백 끝 --> </div> <!-- 여행 찾기 완료 영역 끝 --> </div> <!-- 계산기 영역 끝 --> </div> <!-- 계산기 부분 끝 --> <!-- 탑 버튼 --> <img id="top" src="images/top.c18b7634.png"> <!-- 탑 버튼 끝 --> </div> <!-- 오른쪽 공백 끝 --> </div> <!-- 내용 끝 --> </div> <!-- 요소 끝 --> <!--</body>--> <!--</html>-->'),a.put("views/savedSpot.html",'<link rel="stylesheet" href="styles/savedSpot.css"> <!-- 요소 --> <div id="wrapper"> <!-- 상위 바 --> <div id="bottom"> <!-- 왼쪽 공백 --> <div id="whiteSpaceLeft"></div> <!-- 왼쪽 공백 끝 --> <!-- 콘텐츠 --> <div id="content"> <!-- 텍스트 영역 --> <div id="textSpace_saved"> <!-- 나에게로 떠나는 여행 영역 --> <div id="forMeSpace"> <!-- 네모 영역 --> <div class="square"> <!-- 네모 --> <div class="texture"></div> </div> <!-- 네모 영역 끝 --> <!-- 텍스트 영역 --> <div id="forMe"> <!-- 텍스트 --> <p>저장된 여행지</p> </div> <!-- 텍스트 영역 끝 --> <!-- 네모 영역 --> <div class="square"> <!-- 네모 --> <div class="texture"></div> </div> <!-- 네모 영역 끝 --> </div> <!-- 나에게로 떠나는 여행 영역 끝--> <!-- 전체 삭제 영역--> <div id="deleteAll"> <!-- 공백 영역 --> <div id="deleteWhiteSpace"></div> <!-- 공백 영역 끝 --> <!-- 콘텐츠 영역 --> <div id="deleteContent" ng-click="delCart()"> <!-- 텍스트 --> <p id="deleteText">삭제</p> <!-- 이미지 --> <img id="trash" src="images/trash(gray).af972b28.png"> </div> <!-- 콘텐츠 영역 끝 --> </div> <!-- 전체 삭제 영역 끝 --> </div> <!-- 텍스트 영역 끝 --> <!-- 목록 영역 --> <div id="listSpace_saved"> <!-- 열 --> <div class="row" ng-repeat="list in lists track by $index" ng-if="$index % 3 ==0"> <!-- 콘텐츠 1--> <div class="item_saved" ng-repeat="i in [$index, $index+1, $index+2]" ng-if="lists[i] != null" style="background: url({{lists[i].area[0].firstimage}}),url(\'images/defaultsmallsize.3c431783.png\');background-size: auto auto ,100% 100%;background-repeat: no-repeat"> <!-- 아이템 원 끝 --> , <div class="itemCircle_saved" ng-if="lists[i].checked==undefined" ng-click="listSelect(i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/circle.282ee581.png" style="display: none"> </div> <div class="itemCircle_saved" ng-if="lists[i].checked==true" ng-click="listSelect(i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/check(blue).585e5649.png" style="background: url(\'../images/circle.282ee581.png\');background-size: 100% 100%"> </div> <div class="itemCircle_saved" ng-if="lists[i].checked==false" ng-click="listSelect(i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/circle.282ee581.png"> </div> <!-- 아이템 이미지 영역 --> <div class="itemImageSpace_saved" ng-click="listDetail(lists[i].num)"> <!-- 텍스트 --> <div class="itemText"> <!-- 예산 텍스트 영역 --> <div class="moneySpace"> <p class="title">예산&nbsp;&nbsp;</p> <p class="moneyValue">{{prices[i]}}</p> </div> <!-- 예산 텍스트 영역 끝 --> <!-- 여행지 타입 영역 --> <div class="travelType"> <p class="title"> {{titles[i]}} </p> <p class="typeValue"></p> </div> <!-- 여행지 타입 영역 끝 --> </div> <!-- 이미지 --> <img class="itemImage_saved" src="images/blur.4fd8879d.png"> </div> <!-- 아이템 이미지 영역 끝 --> </div> </div> </div> <!-- 목록 영역 끝 --> </div> <!-- 콘텐츠 끝 --> <!-- 오른쪽 공백 --> <div id="whiteSpaceRight_saved"></div> <!-- 오른쪽 공백 끝 --> </div> <!-- 내용 끝 --> </div> <!-- 요소 끝 -->'),a.put("views/spotList_detail.html",'<!--<link rel="stylesheet" href="styles/spotList_detail.css"/>--><!-- 요소 --> <div id="wrapper"> <div id="bottom"> <!-- 왼쪽 공백 --> <div id="whiteSpaceLeft"></div> <!-- 왼쪽 공백 끝 --> <!-- 콘텐츠 --> <div id="content"> <!-- 텍스트 영역 --> <div id="textSpace_spotL"> <!-- 나에게로 떠나는 여행 영역 --> <div id="forMeSpace"> <!-- 네모 영역 --> <div class="square"> <!-- 네모 --> <div class="texture"></div> </div> <!-- 네모 영역 끝 --> <!-- 텍스트 영역 --> <div id="forMe"> <!-- 텍스트 --> <p>{{name}}</p> </div> <!-- 텍스트 영역 끝 --> <!-- 네모 영역 --> <div class="square"> <!-- 네모 --> <div class="texture"></div> </div> <!-- 네모 영역 끝 --> </div> <!-- 나에게로 떠나는 여행 영역 끝--> <!-- 전체 삭제 영역--> <div id="deleteAll"> <!-- 공백 영역 --> <div id="deleteWhiteSpace"></div> <!-- 공백 영역 끝 --> <!-- 콘텐츠 영역 --> <div id="deleteContent" ng-click="delspot();"> <!-- 텍스트 --> <p id="deleteText">삭제</p> <!-- 이미지 --> <img id="trash" src="images/trash(gray).af972b28.png"> </div> <!-- 콘텐츠 영역 끝 --> </div> <!-- 전체 삭제 영역 끝 --> </div> <!-- 텍스트 영역 끝 --> <!-- 목록 영역 --> <div id="listSpace_spotL"> <!-- 아이템 열 --> <div class="itemRow" ng-repeat="spot in sspots track by $index" ng-if="$index % 2==0"> <!-- 아이템 영역 1 --> <div class="itemSpace" ng-repeat="i in [$index ,$index+1]" ng-if="sspots[i].contentid!==undefined"> <!-- 아이템 이미지 영역 --> <!--과제 1 : ng-class를 이용한 코드 간결화--> <div class="itemCircle_spotL" ng-click="spotSelect(i);" ng-if="sspots[i].checked==undefined"> <img class="checkCircle" src="images/circle.282ee581.png"> </div> <div class="itemCircle_spotL" ng-if="sspots[i].checked==true" ng-click="spotSelect(i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/check(blue).585e5649.png" style="background: url(\'../images/circle.282ee581.png\');background-size: 100% 100%"> </div> <div class="itemCircle_spotL" ng-if="sspots[i].checked==false" ng-click="spotSelect(i);"> <!-- 체크표시 --> <img class="checkCircle" src="images/circle.282ee581.png"> </div> <div class="itemImageSpace_spotL"> <img src="{{sspots[i].firstimage}}" style="border-radius: 5px"> </div> <!-- 아이템 이미지 영역 끝 --> <!-- 아이템 텍스트 영역 --> <div class="itemTextSpace"> <!-- 여행지 이름 영역 --> <div class="spotNameSpace"> <!-- 위 공백 --> <div class="upWhiteSpace"></div> <!-- 위 공백 끝 --> <!-- 여행지 이름 --> <div class="spotName"> <!-- 버튼 영역 --> <div class="name"> <button type="button" ng-if="sspots[i].type==0">여행지</button> <button type="button" ng-if="sspots[i].type==1">숙소</button> </div> <!-- 버튼 영역 끝 --> <!-- 텍스트 영역 --> <div class="text"> <p>{{sspots[i].title}}</p> </div> <!-- 텍스트 영역 끝 --> </div> <!-- 여행지 이름 끝 --> <!-- 아래 공백 --> <div class="downWhiteSpace"></div> <!-- 아래 공백 끝 --> </div> <!-- 여행지 이름 영역 끝 --> <!-- 여행지 가격 영역 --> <div class="spotMoneySpace"> <!-- 위 공백 --> <div class="downWhiteSpace"></div> <!-- 위 공백 끝 --> <!-- 여행지 가격 --> <div class="spotMoney"> <!-- 버튼 영역 --> <div class="name"> <button type="button">가격</button> </div> <!-- 버튼 영역 끝 --> <!-- 텍스트 영역 --> <div class="text"> <p class="itemText">{{sspots[i].price}}</p> <div class="img"> <img src="images/won.3a176151.png"> </div> </div> <div class="downWhiteSpace"></div> <!-- 텍스트 영역 끝 --> </div> <!-- 여행지 가격 끝 --> <!-- 아래 공백 --> <div class="upWhiteSpace"></div> <!-- 아래 공백 끝 --> </div> <!-- 여행지 가격 영역 끝 --> </div> <!-- 아이템 텍스트 영역 끝 --> <img class="blurImage" src="images/blur2.ea196f2b.png" ng-click="spotDetail(sspots[i].contentid,sspots[i].type)"> </div> </div> </div> <!-- 목록 영역 끝 --> </div> <!-- 콘텐츠 끝 --> <!-- 오른쪽 공백 --> <div id="whiteSpaceRight"></div> <!-- 오른쪽 공백 끝 --> </div> <!-- 내용 끝 --> </div> <!-- 요소 끝 -->'),a.put("views/spot_detail.html",'<!-- 요소 --> <div id="spotSpace"> <!-- 여행지 사진 영역 --> <div id="travelImageSpace"> <!-- 아이템 원 --> <div class="itemCircle_spot"> <!-- 체크표시 --> <img class="checkCircle" src="images/check(blue).585e5649.png"> </div> <!-- 아이템 원 끝 --> <!-- 이미지 영역 --> <div id="imageSpace"> <img src="{{detail.firstimage}}"> </div> <!-- 이미지 영역 끝 --> </div> <!-- 여행지 사진 영역 끝 --> <!-- 여행지 상세정보 영역 --> <!--<div id="detailSpace" style="overflow: auto;height: 50%">--> <!-- 제목 영역 --> <div id="titleSpace"> <p id="title">{{detail.title}} </p></div> <div id="contentSpace"> <div id="moneySpace" style="height: 10%"> <div class="contentNameSpace"> <button type="button">가격</button> </div> <div class="contentValueSpace"> <img src="../images/won.3a176151.png"> <p id="moneyText_spot">{{detail.price}}</p> </div> </div> <!--<div class="whiteSpace"></div>--> <div id="addressSpace" style="height: 10%"> <div class="contentNameSpace"> <button type="button">주소</button> </div> <div class="contentValueSpace"> <p class="value">{{detail.addr1}} {{detail.addr2}}</p> </div> </div> <div id="infoSpace" style="height: 10%"> <div class="contentNameSpace"> <button type="button">정보</button> </div> <div class="contentValueSpace"> <p class="value" ng-bind-html="detail.overview"></p> </div>` </div> <div class="whiteSpace"></div> </div> <!-- 내용 영역 끝 --> </div> <!-- 여행지 상세정보 영역 끝 --> <!--</div>-->');
}]);