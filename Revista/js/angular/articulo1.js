angular.module('revista').controller('Article1Controller', ['$scope', 'ArticleService', 'ImageArticleService', 'AdService', '$location', 
    function($scope, ArticleService, ImageArticleService, AdService, $location) {

        var id = $location.search().id;
        $scope.articulo = {};
        $scope.ad = {};
        $scope.images = [];

        function getArticle() {
            var data = {
                id: id
            };
            ArticleService.getArticulo(data, function(response) {
                $scope.articulo = response;
                getImages();
            });
        }

        function getAd() {
            AdService.getRandom(function(response) {
                $scope.ad = response;
            });
        }

        function getImages() {
            var data = {
                id_a: $scope.articulo.id_a
            };

            ImageArticleService.getImagenArticulos(data, function(response) {
                $scope.images = response.imagen_articulos;
            })
        }

        getArticle();
        getAd();
    }
]);