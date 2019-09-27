angular.module('revista').controller('CategoryController', ['$scope', 'CategoryService', 'SubscriptionService',
    function($scope, CategoryService, SubscriptionService) {
        
        $scope.categorias = [];
        $scope.subscripciones = [];

        function getCategorias() {
            CategoryService.getCategorias(function (response) {
                $scope.categorias = response.categorias;
            });
        }

        function getSubscripciones() {
            SubscriptionService.getSubscripciones(function (response) {
                $scope.subscripciones = response.subscripciones;
            });
        }

        $scope.createCategory = function() {
            console.log("Hola");
            var toCreate = {
                nombre: $scope.createName,
                id_s: $scope.createIdS
            };

            console.log(toCreate);
            CategoryService.createCategoria(toCreate, function (response) {
                console.log(response);
                getCategorias();
                $scope.createName = null;
                $scope.createIdS = null;
            });
        }

        getCategorias();
        getSubscripciones();

    }
]);