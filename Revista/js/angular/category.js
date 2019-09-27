angular.module('revista').controller('CategoryController', ['$scope', 'CategoryService',
    function($scope, CategoryService) {
        
        $scope.categorias = [];

        function getCategorias() {
            CategoryService.getCategorias(function (response) {
                $scope.categorias = response.categorias;
            });
        }

        getCategorias();

    }
]);