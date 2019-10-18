angular.module('revista').controller('SubscriptionController', ['$scope', '$cookies', 'UserService', '$window',
    function($scope, $cookies, UserService, $window) {
    
        $scope.pay = function() {
            var user = JSON.parse($cookies.getObject("loggedUser"));
            var toPay = {
                id_u: user.id_u
            };

            UserService.pay(toPay, function(response) {
                alert("Subscripcion pagada con exito");
                $window.location.href = '#/home';
            })
        }
    }
]);