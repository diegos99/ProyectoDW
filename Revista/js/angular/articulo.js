angular.module('revista').controller('ArticleController', ['$scope', '$cookies', 'ArticleService', 'CategoryService', 'SubCategoryService',
    function($scope, $cookies, ArticleService, CategoryService, SubCategoryService) {
    
        $scope.articulos = [];
        $scope.subcategorias = [];

        function getMisArticulos() {
            var user = JSON.parse($cookies.getObject("loggedUser"));
            var toGet = {
                id_u: user.id_u
            };
            ArticleService.getMisArticulos(toGet, function (response) {
                $scope.articulos = response.articulos;
            });
        }

        function getSubCategoriasToCreate() {
            var toGet = {
                id_c: $scope.categoriaToCreate
            }; 

            SubCategoryService.getSubCategoriesByCategory(toGet, function (response) {
                $scope.subcategorias = response.subcategorias;
            });
        }

        function getSubCategoriasToUpdate() {
            var toGet = {
                id_c: $scope.categoriaToUpdate
            };

            SubCategoryService.getSubCategoriesByCategory(toGet, function (response) {
                $scope.subcategorias = response.subcategorias;
            });
        }

        function getCategorias() {
            CategoryService.getCategorias(function(response) {
                $scope.categorias = response.categorias;
            })
        }

        $scope.updating = function (articulo) {
            $scope.articleToUpdate = articulo;
            $scope.categoriaToUpdate = articulo.id_c;
            $scope.subCategoriaToUpdate = articulo.id_s_c;
            $scope.plantillaToUpdate = articulo.plantilla;
            console.log(articulo);
        }

        $scope.setPlantillaToCreate = function(plantilla) {
            $scope.plantillaToCreate = plantilla;
        }

        $scope.setPlantillaToUpdate = function(plantilla) {
            $scope.plantillaToUpdate = plantilla;
        }

        $scope.setCategoryToCreate = function(categoria) {
            $scope.categoriaToCreate = categoria;
            getSubCategoriasToCreate();
        }

        $scope.setCategoryToUpdate = function() {
            getSubCategoriasToUpdate();
        }

        $scope.createArticle = function() {
            var toCreate = {
                nombre: $scope.createName,
                id_s: $scope.createIdS
            };

            ArticleService.createArticulo(toCreate, function (response) {
                getMisArticulos();
                $scope.createName = null;
                $scope.createIdS = null;
            });
        }

        $scope.setArticuloToDelete = function (articulo) {
            $scope.articuloToDelete = articulo;
        }

        $scope.deleteArticle = function() {
            var toDelete = {
                id: $scope.articuloToDelete.id_a
            };

            ArticleService.deleteArticulo(toDelete, function (response) {
                getMisArticulos();
            });
        }

        $scope.setArticleToUpdate = function(articulo) {
            $scope.categoryToUpdate = articulo;
        }

        $scope.updateArticle = function () {
            var toUpdate = {
                id: $scope.articleToUpdate.id_a,
                id_s_c: $scope.subCategoriaToUpdate,
                plantilla: $scope.plantillaToUpdate
            }
            console.log(toUpdate);
            ArticleService.updateArticuloBasic(toUpdate, function (response) {
                getMisArticulos();
            });
        }

        getMisArticulos();
        getCategorias();
        $(document).foundation();
    }
]);