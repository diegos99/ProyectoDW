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

        return factory;
}]);