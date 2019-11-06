angular.module('revista').controller('ArticleController', ['$scope', '$cookies', '$window', 'ArticleService', 'CategoryService', 'SubCategoryService', 'ImageArticleService',
    function($scope, $cookies, $window, ArticleService, CategoryService, SubCategoryService, ImageArticleService) {
    
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

        $scope.setCategoryToCreate = function() {
            $scope.categoriaToCreate = $scope.createIdC;
            getSubCategoriasToCreate();
        }

        $scope.setCategoryToUpdate = function() {
            getSubCategoriasToUpdate();
        }

        $scope.createArticle = function() {
            var user = JSON.parse($cookies.getObject("loggedUser"));
            var toCreate = {
                id_s_c: $scope.createIdSC,
                id_u: user.id_u,
                plantilla: $scope.plantillaToCreate,
                text: $scope.createText,
                titulo: $scope.createTitle,
                header_image: $scope.createLinkPortada
            };

            ArticleService.createArticulo(toCreate, function (response) {
                if ($scope.plantillaToCreate == 1) {
                    var data1 = {
                        id_a: response.id_a,
                        link: $scope.createArticle1Image1
                    };
                    ImageArticleService.createImagenArticulo(data1, function(res1) {
                        var data2 = {
                            id_a: response.id_a,
                            link: $scope.createArticle1Image2
                        };
                        ImageArticleService.createImagenArticulo(data2, function(res2) {
                            finishCreate();
                        });
                    });
                } else if ($scope.plantillaToCreate == 2) {
                    var data1 = {
                        id_a: response.id_a,
                        link: $scope.createArticle2Image1
                    };
                    ImageArticleService.createImagenArticulo(data1, function(res1) {
                        finishCreate();
                    });
                } else if ($scope.plantillaToCreate == 3) {
                    var data1 = {
                        id_a: response.id_a,
                        link: $scope.createArticle3Image1
                    };
                    ImageArticleService.createImagenArticulo(data1, function(res1) {
                        var data2 = {
                            id_a: response.id_a,
                            link: $scope.createArticle3Image2
                        };
                        ImageArticleService.createImagenArticulo(data2, function(res2) {
                            var data3 = {
                                id_a: response.id_a,
                                link: $scope.createArticle3Image3
                            };
                            ImageArticleService.createImagenArticulo(data3, function(res3) {
                                var data4 = {
                                    id_a: response.id_a,
                                    link: $scope.createArticle3Image4
                                };
                                ImageArticleService.createImagenArticulo(data4, function(res2) {
                                    finishCreate();
                                });
                            });
                        });
                    });
                }
            });
        }

        function finishCreate() {
            getMisArticulos();
            $scope.createIdSC = null;
            $scope.plantillaToCreate = null;
            $scope.createText = null;
            $scope.createTitle = null;
            $scope.createLinkPortada = null;
            $scope.createArticle1Image1 = null;
            $scope.createArticle1Image2 = null;
            $scope.createArticle2Image1 = null;
            $scope.createArticle3Image1 = null;
            $scope.createArticle3Image2 = null;
            $scope.createArticle3Image3 = null;
            $scope.createArticle3Image4 = null;
            alert("Articulo creado");
        }

        $scope.verArticulo = function(articulo) {
            if (articulo.plantilla == 1) {
                $window.location.href = '#/article1?id=' + articulo.id_a;
            } else if (articulo.plantilla == 2) {
                $window.location.href = '#/article2?id=' + articulo.id_a;
            } else if (articulo.plantilla == 3) {
                $window.location.href = '#/article3?id=' + articulo.id_a;
            }
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