angular.module('revista').controller('BarController', ['$scope', '$cookies',
    function($scope, $cookies) {
        $scope.isLector = false;
        $scope.isAdmin = false;
        $scope.isAutor = false;

        function isLogged() {
            if ($cookies.getObject("loggedUser") == null) {
                $scope.isLogged = false;
            } else {
                $scope.isLogged = true;
                $scope.user = JSON.parse($cookies.getObject("loggedUser"));
            }
        }

        function calculatePermissions() {

            if ($cookies.getObject("loggedUser") != null) {
                var user = JSON.parse($cookies.getObject("loggedUser"));
                console.log(user);
                if (user.id_r === "2") {
                    $scope.isAdmin = true;
                }

                if (user.id_r === "3") {
                    $scope.isAutor = true;
                }

                if (user.id_r === "4") {
                    $scope.isLector = true;
                }
            }
            
        }

        isLogged();
        calculatePermissions();
    }
]);