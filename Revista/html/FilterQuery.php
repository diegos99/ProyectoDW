<?php

//index.php

?>
<!DOCTYPE html>
<html>

<head>
    <title>Busqueda con filtros y ordenamiento</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <div ng-include="'html/topbar.html'"></div>
    <style>
        .form_style {
            width: 600px;
            margin: 0 auto;
        }
    </style>
</head>

<body>

    <div class="container" ng-app="live_search_app" ng-controller="live_search_controller" ng-init="fetchData()">
        <br />
        <h3 align="center">Busqueda con filtros y ordenamiento</h3>
        <br />
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">Search</span>
                <input type="text" name="search_query" ng-model="search_query" ng-keyup="fetchData()" placeholder="Ingrese la palabra clave" class="form-control" />
            </div>
        </div>
        <br />
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Id_articulo</th>
                    <th>Fecha de publicación</th>
                    <th>Categoría</th>
                    <th>Sub Categoría</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="data in searchData">
                    <td>{{ data.id_a }}</td>
                    <td>{{ data.fecha_p }}</td>
                    <td>{{ data.nombre_categoria }}</td>
                    <td>{{ data.nombre_sub_categoria }}</td>
                    <td>{{ data.nombre }}</td>
                    <td>{{ data.apellido }}</td>
                </tr>
            </tbody>
        </table>
    </div>
   
</body>

</html>

<script>
    var app = angular.module('live_search_app', []);
    app.controller('live_search_controller', function($scope, $http) {
        $scope.fetchData = function() {
            $http({
                method: "POST",
                url: "fetch.php",
                data: {
                    search_query: $scope.search_query
                }
            }).success(function(data) {
                $scope.searchData = data;
            });
        };
    });
</script>