angular.module('revista', ['ngRoute', 'ngCookies'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: 'html/home.html',
                controller: 'HomeController'
            })
            .when("/categorias", {
                templateUrl: 'html/categorias.html',
                controller: 'CategoryController'
            })
            .when("/subcategorias", {
                templateUrl: 'html/subcategorias.html',
                controller: 'SubCategoryController'
            })
            .when("/perfil", {
                templateUrl: 'html/Usuario.html',
                controller: 'UserController'
            })
            .when("/login", {
                templateUrl: 'html/login.html',
                controller: 'LogInController'
            })
            .when("/usuarios", {
                templateUrl: 'html/usuarios.html',
                controller: 'UsuariosController'
            })
            .when("/articulos", {
                templateUrl: 'html/crear_art.html',
                controller: 'ArticleController'
            })
            .otherwise("/home");
    }]);

angular.module('revista').constant("serverIp", "localhost");