angular.module('revista').controller('SubCategoryController', ['$scope', 'CategoryService', 'SubCategoryService',
    function($scope, CategoryService, SubCategoryService) {
        $scope.categorias = [];
        $scope.subcategorias = [];

        function getCategorias() {
            CategoryService.getCategorias(function (response) {
                $scope.categorias = response.categorias;
            });
        }

        function getSubCategorias() {
            SubCategoryService.getSubCategorias(function (response) {
                $scope.subcategorias = response.subcategorias;
            });
        }

        $scope.createSubCategory = function() {
            var toCreate = {
                nombre: $scope.createName,
                id_c: $scope.createIdC
            };

            SubCategoryService.createSubCategoria(toCreate, function (response) {
                getSubCategorias();
                $scope.createName = null;
                $scope.createIdC = null;
            });
        }

        $scope.setSubCategoriaToDelete = function (subcategoria) {
            $scope.subcategoriaToDelete = subcategoria;
        }

        $scope.deleteSubCategory = function() {
            var toDelete = {
                id: $scope.subcategoriaToDelete.id_s_c
            };

            SubCategoryService.deleteSubCategoria(toDelete, function (response) {
                getSubCategorias();
            });
        }

        $scope.setSubCategoryToUpdate = function(subcategoria) {
            $scope.subcategoryToUpdate = subcategoria;
        }

        $scope.updateSubCategory = function () {
            var toUpdate = {
                id: $scope.subcategoryToUpdate.id_s_c,
                nombre: $scope.subcategoryToUpdate.nombre,
                id_c: $scope.subcategoryToUpdate.id_c
            }
            SubCategoryService.updateSubCategoria(toUpdate, function (response) {
                getSubCategorias();
            });
        }

        getSubCategorias();
        getCategorias();
        $(document).foundation();

    }
]);