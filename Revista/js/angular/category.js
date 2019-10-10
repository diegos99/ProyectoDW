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
            var toCreate = {
                nombre: $scope.createName,
                id_s: $scope.createIdS
            };

            CategoryService.createCategoria(toCreate, function (response) {
                getCategorias();
                $scope.createName = null;
                $scope.createIdS = null;
            });
        }

        $scope.setCategoriaToDelete = function (categoria) {
            $scope.categoriaToDelete = categoria;
        }

        $scope.deleteCategory = function() {
            var toDelete = {
                id: $scope.categoriaToDelete.id_c
            };

            CategoryService.deleteCategoria(toDelete, function (response) {
                getCategorias();
            });
        }

        $scope.setCategoryToUpdate = function(categoria) {
            $scope.categoryToUpdate = categoria;
        }

        $scope.updateCategory = function () {
            var toUpdate = {
                id: $scope.categoryToUpdate.id_c,
                nombre: $scope.categoryToUpdate.nombre,
                id_s: $scope.categoryToUpdate.id_s
            }
            CategoryService.updateCategoria(toUpdate, function (response) {
                getCategorias();
            });
        }

        getCategorias();
        getSubscripciones();
        $(document).foundation();

    }
]);