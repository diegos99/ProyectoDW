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
            .when("/registrarme", {
                templateUrl: 'html/signin.html',
                controller: 'SignInController'
            })
            .when("/comprar", {
                templateUrl: 'html/subscripcion.html',
                controller: 'SubscriptionController'
            })
            .when("/anuncios", {
                templateUrl: 'html/modulo-anuncios.html',
                controller: 'AdController'
            })
            .when("/article1", {
                templateUrl: 'html/articulo1.html',
                controller: 'Article1Controller'
            })
            .when("/article2", {
                templateUrl: 'html/articulo2.html',
                controller: 'Article2Controller'
            })
            .when("/article3", {
                templateUrl: 'html/articulo3.html',
                controller: 'Article3Controller'
            })
            .otherwise("/home");
    }]);

angular.module('revista').constant("serverIp", "localhost");