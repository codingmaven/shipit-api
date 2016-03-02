/**
 * Created by DreamSoft on 8/7/2015.
 */

angular.module('login')
    .factory('LoginService', [
                  '$http','$state','$window',
        function ( $http , $state , $window) {

            return {
                /**
                 * Login user to API
                 *
                 * @user - {Object}
                 * */
                doLogin: function (user, $scope) {

                    $http({
                        method: 'POST',
                        url: '/api/login',
                        data: {
                            username: user.username,
                            password: user.password
                        }
                    })
                        .then(function(data) {
                            if(data.data.success) {
                                $window.sessionStorage.setItem("api_token", data.data.api_token);
                                $state.go('admin.home');
                            }
                            /*if ( !response.data.user ) {
                                $scope.authError = 'Email or Password not right';
                            }else{
                                $state.go('app.dashboard-v1');
                            }*/
                        }, function(x) {
                            if(x.data.status && x.data.status == "401")
                                $scope.authError = x.data.reason;
                            else
                                $scope.authError = 'Server Error';
                        });
                },
                doSignup: function (user, $scope) {

                    $http({
                        method: 'POST',
                        url: '/api/register',
                        data: {
                            email: user.email,
                            username: user.username,
                            password: user.password
                        }
                    })
                        .then(function(data) {
                            if(data.data.success) {
                                $window.sessionStorage.setItem("api_token", data.data.api_token);
                                $state.go('admin.home');
                            }
                            /*if ( !response.data.user ) {
                             $scope.authError = 'Email or Password not right';
                             }else{
                             $state.go('app.dashboard-v1');
                             }*/
                        }, function(x) {
                            $scope.authError = x.data.showToUser;
                        });
                },
                /**
                 * Logout current user
                 * */
                doLogout: function () {
                    $window.sessionStorage.removeItem('api_token');
                    $state.go('login');
                },

                /**
                 * @return user {Object}
                 * */
                ensureLogin: function(){
                    if(!$window.sessionStorage.getItem('api_token')){
                        $state.go('login');
                    }
                },

                getUser: function () {
                    return $window.sessionStorage.getItem('api_token');
                }

            }
        }
    ]);