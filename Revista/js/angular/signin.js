angular.module('revista').controller('SignInController', ['$scope', 'UserService', '$window', '$cookies',
    function($scope, UserService, $window, $cookies) {

        $scope.signin = function () {
            var toCreate = {
                "correo": $scope.correo,
                "contrasena": $scope.contrasena,
                "nombre": $scope.nombre,
                "apellido": $scope.apellido,
                "telefono": $scope.telefono
            }
            UserService.createUsuario(toCreate, function (response) {
                $scope.correo = null;
                $scope.contrasena = null;
                $scope.nombre = null;
                $scope.apellido = null;
                $scope.telefono = null;
                $window.location.href = '#/login';
            });
        };
    }
]);