angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      });
    }

  }
});
