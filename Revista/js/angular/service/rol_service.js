angular.module('revista').factory('RolService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getRoles = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/rol/read.php',
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.createRol = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/rol/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteRol = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/rol/delete.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.updateRol = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/rol/update.php',
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