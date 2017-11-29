'use strict';

angular.module('triphowmuchApp')
  .service('searchSvc',function ($http,BASE_URL) {
    var result = {};

    var options = {};

    return{

      setSearch: function (response) {
        console.log('set 하기전');
        console.log(response);
        result = {};
        result = response;
        console.log('setSearch결과보기');
        console.log(result);
      },
      getSearch:function () {
        return result;
      },

      setOption:function (option) {
        options = option;
      },
      getOption:function () {
        return options;
      }



    };
  });



