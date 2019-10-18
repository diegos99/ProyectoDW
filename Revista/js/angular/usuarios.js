angular.module('revista').controller('UsuariosController', ['$scope', 'UserService', 'RolService',
    function($scope, UserService, RolService) {
        
        $scope.usuarios = [];
        $scope.roles = [];

        function getUsuarios() {
            UserService.getUsuarios(function (response) {
                $scope.usuarios = response.usuarios;
            });
        }

        function getRoles() {
            RolService.getRoles(function (response) {
                $scope.roles = response.roles;
            });
        }

        $scope.createUser = function() {
            var toCreate = {
                nombre: $scope.createName,
                apellido: $scope.createLastName,
                telefono: $scope.createPhone,
                correo: $scope.createEmail,
                contrasena: $scope.createPassword,
            };

            UserService.createUsuario(toCreate, function (response) {
                getUsuarios();
                $scope.createName = null;
                $scope.createLastName = null;
                $scope.createPhone = null;
                $scope.createEmail = null;
                $scope.createPassword = null;
            });
        }

        $scope.setUsuarioToDelete = function (usuario) {
            $scope.usuarioToDelete = usuario;
        }

        $scope.deleteUser = function() {
            var toDelete = {
                id: $scope.usuarioToDelete.id_u
            };

            UserService.deleteUsuario(toDelete, function (response) {
                getUsuarios();
            });
        }

        $scope.setUserToUpdate = function(usuario) {
            $scope.userToUpdate = usuario;
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
                getUsuarios();
            });
        }

        $scope.setUsuarioToRol = function(usuario) {
            $scope.userToUpdate = usuario;
            $scope.updateIdR = usuario.id_r;
        }

        $scope.updateUserRol = function() {
            var toUpdate = {
                id_u: $scope.userToUpdate.id_u,
                id_r: $scope.updateIdR
            };
            UserService.updateRolUsuario(toUpdate, function(response) {
                getUsuarios();
            });
        }

        $scope.setUpdatePassword = function(usuario) {
            $scope.userToUpdate = usuario;
        }

        $scope.updateUserPassword = function () {
            var toUpdate = {
                id: $scope.userToUpdate.id_u,
                contrasena: $scope.passwordToUpdate
            };

            UserService.updateContrasenaUsuario(toUpdate, function(response) {
                getUsuarios();
            });
        }

        getUsuarios();
        getRoles();
        $(document).foundation();

    }
]);