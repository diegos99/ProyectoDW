angular.module('revista').controller('UserController', ['$scope', '$window', '$cookies',
    function($scope, $window, $cookies) {
            
        function isLogged() {
            if (JSON.parse($cookies.getObject("loggedUser")) == null) {
                $scope.isLogged = false;
                $window.location.href = '#/home';
            } else {
                $scope.isLogged = true;
                $scope.user = JSON.parse($cookies.getObject("loggedUser"));
                console.log($scope.user);
            }
        }

        $scope.logOut = function () {
            $cookies.remove("loggedUser");
            $window.location.href = '#/home';
        }


        isLogged();
    }
]);