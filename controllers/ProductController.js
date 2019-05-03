/*
    https://stackoverflow.com/questions/35091524/spring-cors-no-access-control-allow-origin-header-is-present

    There is a problem to resolve later NO-ACCESS-CONTROL-ALLOW-ORIGIN
*/
appModule.controller('ProductController', function($scope, $window, $routeParams, $rootScope, $route, $http) {
    $scope.products = [];

    function init() {
        $http.get('http://localhost:8080/products/').then(function(rep){
            console.log(rep);
            rep.forEach(element => {
                $scope.products.push({
                    id: element.id,
                    designation: element.designation,
                    unitPrice: element.unitPrice,
                    availableQuantity: element.availableQuantity
                });
            });
            $scope.$apply();
        });
    }
    init();

    $scope.createProduct = function (product) {
        $scope.product = {
            designation: product.designation,
            unitPrice: product.unitPrice,
            availableQuantity: product.availableQuantity
        };
        
        //POST Request to http://localhost:8080/products/
    };

    $scope.updateProductInit = function() {
        var id = $routeParams.id;
        
        //Get Request to get one product by id
        // http://localhost:8080/products/{id}
    };

    $scope.updateProduct = function(product) {
        var id = $routeParams.id;

        //PUT request http://localhost:8080/products/{id}
    };

    $scope.removeModal = function(id){
        $rootScope.selectedId = id;
    }

    $scope.removeProduct = function(id) {
        var id = $rootScope.selectedId;
        
        //DELETE request http://localhost:8080/products/{id}
    };

    $scope.reload = function(){
        $route.reload();
    };
});