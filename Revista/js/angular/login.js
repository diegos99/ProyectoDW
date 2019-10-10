angular.module('revista').controller('LogInController', ['$scope', 'LogInService', '$window', '$cookies',
    function($scope, LogInService, $window, $cookies) {

        $scope.login = function () {
            data = {
                "correo": $scope.correo,
                "contrasena": $scope.contrasena
            }
            LogInService.logIn(data, function (response) {
                if (response.login == true) {
                    $cookies.putObject("loggedUser", JSON.stringify(response), {});
                    $window.location.href = '#/home';
                } else {
                    $scope.badCredentials = true;
                }
            });
        };

        function checkUser() {
            if ($cookies.getObject("loggedUser") != null) {
                $window.location.href = '#/home';
            }
        }
    }
]);