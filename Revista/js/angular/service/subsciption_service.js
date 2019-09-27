angular.module('revista').factory('SubscriptionService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.getSubscripciones = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/subscripcion/read.php',
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