/**
 * Created by DreamSoft on 8/7/2015.
 */

angular.module('admin')
    .controller('AdminController', ['$scope', '$state', 'LoginService',
        function(                    $scope ,  $state,   LoginService ) {

            $scope.logout = function(){
                LoginService.doLogout();
            }
            // config
            $scope.app = {
                name: 'Phoyolabs',
                version: '2.0.1',
                // for chart colors
                color: {
                    primary: '#7266ba',
                    info:    '#23b7e5',
                    success: '#27c24c',
                    warning: '#fad733',
                    danger:  '#f05050',
                    light:   '#e8eff0',
                    dark:    '#3a3f51',
                    black:   '#1c2b36'
                },
                settings: {
                    themeID: 1,
                    navbarHeaderColor: 'bg-black',
                    navbarCollapseColor: 'bg-white-only',
                    asideColor: 'bg-black',
                    headerFixed: true,
                    asideFixed: false,
                    asideFolded: false,
                    asideDock: false,
                    container: false
                }
            }

        }]);
