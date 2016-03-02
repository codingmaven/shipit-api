/**
 * Created by DreamSoft on 8/7/2015.
 */
var login = angular.module('signup', []);
login.controller('SignupController', ['$scope', '$http', '$state','LoginService', function($scope, $http, $state, LoginService) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function() {
        $scope.authError = null;
        LoginService.doSignup($scope.user, $scope);
    };
    $scope.gotologin = function(){
        $state.go('login');
    }
}])
;