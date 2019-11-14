angular.module('revista').controller('BlobController', ['$scope', 'BlobService', 
    function($scope, BlobService) {
        
        $scope.blobs = [];

        function getBlobs() {
            BlobService.getBlobs(function (response) {
                $scope.blobs = response.blobs;
            });
        }
        $scope.createBlob = function() {
            var toCreate = {
                nombre: $scope.createName,
                imagen: $scope.createImagen
            };

            BlobService.createBlob(toCreate, function (response) {
                getBlobs();
                $scope.createName = null;
                $scope.createImagen = null;
            });
        }

        $scope.deleteBlob = function(blob) {
            var toDelete = {
                id: blob.id_blob
            };

            BlobService.deleteBlob(toDelete, function (response) {
                getBlobs();
            });
        }

        $scope.setBlobToUpdate = function(blob) {
            $scope.blobToUpdate = blob;
        }

        $scope.updateBlob = function () {
            var toUpdate = {
                id: $scope.blobToUpdate.id_blob,
                nombre: $scope.blobToUpdate.nombre,
                link_imagen: $scope.blobToUpdate.imagen
            }
            BlobService.updateBlob(toUpdate, function (response) {
                getBlobs();
            });
        }

        getBlobs();
        $(document).foundation();

    }
]);