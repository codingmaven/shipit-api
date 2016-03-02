var event = angular.module('home', ['toastr']);

event.controller('HomeController', [
            '$scope', '$filter', '$http', 'editableOptions', 'editableThemes', 'LoginService',
    function($scope,   $filter,   $http,   editableOptions,   editableThemes ,  LoginService  ) {

        LoginService.ensureLogin();


    }
]);
