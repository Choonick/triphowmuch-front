'use strict';

angular.module('triphowmuchApp')
  .factory('spotFct',function ($http,BASE_URL) {
    return {

      getSpot:function (id) {
        return $http.get(BASE_URL+'/area/'+id);
      },
      getHoDetail:function (id) {
        return $http.get(BASE_URL+'/stay/'+id);
      },

      getList: function () {
        return $http.get(BASE_URL+'/cart/'+localStorage.getItem('email'));

      },


      // 저장된 여행지중 클릭했을 나오는 여행지의 리스트
      getSpotlist: function (num) {
        return $http.get(BASE_URL+'/cart/'+localStorage.getItem('email')+'/'+num);
      },

      delCarts:function (nums) {

        return $http.delete(BASE_URL+'/cart/'+localStorage.getItem('email'),{data:{num:nums}});
      },

      delSpots:function (spot,num) {

        return $http.delete(BASE_URL+'/cart/'+localStorage.getItem('email')+'/'+num,{data:{contents:spot}});
      }


    };
  });
