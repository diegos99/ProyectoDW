angular.module('revista').factory('SubCategoryService', ['$http', 
    function($http) {
        var factory = {};

        var factory = {};

        factory.getSubCategorias = function (callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/subcategoria/read.php',
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.getSubCategoriesByCategory = function (data, callback) {
            var req = {
                method: 'GET',
                url: 'http://localhost/revista_unis/api/subcategoria/read_category.php?id_c=' + data.id_c,
                header: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.createSubCategoria = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/subcategoria/create.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.deleteSubCategoria = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/subcategoria/delete.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }

        factory.updateSubCategoria = function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://localhost/revista_unis/api/subcategoria/update.php',
                header: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            $http(req).success(function (response) {
                callback(response);
            });
        }
    

        return factory;
    }])