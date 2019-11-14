angular.module('revista').factory('BlobService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getBlobs = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/blob/read.php',
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }        

        factory.createBlob = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/blob/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteBlob = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/blob/delete.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.updateBlob = function (data, callback) {
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