angular.module('revista').controller('BarController', ['$scope', '$cookies',
    function($scope, $cookies) {
    
        function isLogged() {
            if ($cookies.getObject("loggedUser") == null) {
                $scope.isLogged = false;
            } else {
                $scope.isLogged = true;
                $scope.user = JSON.parse($cookies.getObject("loggedUser"));
                console.log($scope.user);
            }
        }

        isLogged();
    }
]);