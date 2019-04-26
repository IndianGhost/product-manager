var appModule = angular.module('appModule', ['ngRoute', 'ngAnimate']);

appModule.config(function($routeProvider) {
    $routeProvider
    .when('/products/',
    {
        controller: 'ProductController',
        templateUrl: 'templates/home.htm'
    })
    .when('/products/add',
    {
        controller: 'ProductController',
        templateUrl: 'templates/add.htm'
    })
    .when('/products/edit/:id',
    {
        controller: 'ProductController',
        templateUrl: 'templates/edit.htm'
    })
    .otherwise(
    {
        redirectTo: '/products'
    });
});