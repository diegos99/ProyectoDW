angular.module('revista').factory('ArticleService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getArticulos = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/articulo/read.php',
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.createArticulo = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/articulo/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteArticulo = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/articulo/delete.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.updateArticulo = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/articulo/update.php',
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