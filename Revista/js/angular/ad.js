angular.module('revista').controller('AdController', ['$scope', 'AdService', 
    function($scope, AdService) {
        
        $scope.anuncios = [];

        function getAnuncios() {
            AdService.getAnuncios(function (response) {
                $scope.anuncios = response.anuncios;
            });
        }
        $scope.createAd = function() {
            var toCreate = {
                nombre: $scope.createName,
                link_imagen: $scope.createLinkImagen
            };

            AdService.createAnuncio(toCreate, function (response) {
                getAnuncios();
                $scope.createName = null;
                $scope.createLinkImagen = null;
            });
        }

        $scope.deleteAd = function(anuncio) {
            var toDelete = {
                id: anuncio.id_anuncio
            };

            AdService.deleteAnuncio(toDelete, function (response) {
                getAnuncios();
            });
        }

        $scope.setAdToUpdate = function(anuncio) {
            $scope.adToUpdate = anuncio;
        }

        $scope.updateAd = function () {
            var toUpdate = {
                id: $scope.adToUpdate.id_anuncio,
                nombre: $scope.adToUpdate.nombre,
                link_imagen: $scope.adToUpdate.link_imagen
            }
            AdService.updateAnuncio(toUpdate, function (response) {
                getAnuncios();
            });
        }

        getAnuncios();
        $(document).foundation();

    }
]);