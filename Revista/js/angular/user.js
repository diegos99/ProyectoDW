angular.module('revista').controller('UserController', ['$scope', '$window', '$cookies', 'UserService',
    function($scope, $window, $cookies, UserService) {
            
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

        $scope.updateUserPassword = function () {
            var user = JSON.parse($cookies.getObject("loggedUser"));
            var toUpdate = {
                id: user.id_u,
                contrasena: $scope.passwordToUpdate
            };

            UserService.updateContrasenaUsuario(toUpdate, function(response) {
                alert("contraseña actualizada");
                $scope.logOut();
                $window.location.href = '#/login';
            });
        }

        $scope.updateUser = function () {
            var toUpdate = {
                id: $scope.userToUpdate.id_u,
                nombre: $scope.userToUpdate.nombre,
                apellido: $scope.userToUpdate.apellido,
                telefono: $scope.userToUpdate.telefono,
                correo: $scope.userToUpdate.correo,
            }
            UserService.updateUsuario(toUpdate, function (response) {
                $cookies.putObject("loggedUser", JSON.stringify($scope.userToUpdate), {});
                alert("Tu informacion se ha actualizado");
            });
        }

        $(document).foundation();
        isLogged();
        var user = JSON.parse($cookies.getObject("loggedUser"));
        $scope.userToUpdate = user;
    }
]);