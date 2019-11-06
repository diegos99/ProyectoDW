angular.module('revista').factory('AdService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getAnuncios = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/anuncio/read.php',
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.createAnuncio = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/anuncio/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteAnuncio = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/anuncio/delete.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.updateAnuncio = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/anuncio/update.php',
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