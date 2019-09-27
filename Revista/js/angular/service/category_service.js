angular.module('revista').factory('CategoryService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getCategorias = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/categoria/read.php',
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.createCategoria = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/categoria/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteCategoria = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/categoria/delete.php',
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