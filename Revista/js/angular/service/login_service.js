angular.module('revista').factory('LogInService', ['$http', '$cookies', '$window',
    function ($http, $cookies, $window) {

        var factory = {};

        factory.logIn = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/usuario/login.php',
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