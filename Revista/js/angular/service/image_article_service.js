angular.module('revista').factory('ImageArticleService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getImagenArticulos = function (data, callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/articulo_imagen/read.php?id_a=' + data.id_a,
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.createImagenArticulo = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/articulo_imagen/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteImagenArticulo = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/articulo_imagen/delete.php',
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