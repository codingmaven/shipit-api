/**
 * Created by DreamSoft on 8/7/2015.
 */
var login = angular.module('login', []);
login.controller('LoginController', ['$scope', '$http', '$state','LoginService', function($scope, $http, $state, LoginService) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
        $scope.authError = null;
        LoginService.doLogin($scope.user, $scope);
    };

    $scope.gotosignup = function(){
        $state.go('signup');
    }
}])
;