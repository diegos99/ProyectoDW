angular.module('revista').factory('UserService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getUsuarios = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/usuario/read.php',
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.createUsuario = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/usuario/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteUsuario = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/usuario/delete.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.updateUsuario = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/usuario/update.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.updateRolUsuario = function (data, callback) {
            var req = {
                method: 'PUT',
                url: 'http://localhost/revista_unis/api/usuario/update_rol.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            $http(req).success(function (response) {
                callback(response);
            });
        }
    

        return factory;
}]);