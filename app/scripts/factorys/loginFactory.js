'use strict';

angular.module('triphowmuchApp')
  .factory('loginFct',function ($http,BASE_URL) {
    return {

      login:function (userid) {
        var cnt = {
          email:userid,
          key:'2'
        };
        console.log(cnt);
        // return 0;
        return $http.post(BASE_URL+'/login',cnt);
      }

    };
  });
