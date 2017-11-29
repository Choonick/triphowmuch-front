'use strict';

angular.module('triphowmuchApp')
  .factory('mainFct', function ($http, BASE_URL) {
    return {
      postSearch: function (options) {

        var config = {
          params: options
        };

        return $http.get(BASE_URL + '/area/search', config);
      },
      postCart: function (cart) {
        return $http.post(BASE_URL + '/cart/'+localStorage.getItem('email'), cart);
      },


      // 저장된 여행지 불러오기
      getSaved: function () {
        return $http.get(BASE_URL + '/cart/'+localStorage.getItem('email'));
      },

      getHotel: function (domi) {
        var config = {
          params: domi
        };
        return $http.get(BASE_URL + '/stay/search', config);


      }



    };
  });



