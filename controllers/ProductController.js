appModule.controller('ProductController', function($scope, $window, $routeParams, $rootScope, $route, $http) {
    $scope.products = [];
    
    /* Read product */
    function init() {
        
        //GET Request to
        var url = 'http://localhost:8080/products/';
        
        $http.get(url).then(function(rep){
            for(var i=0; i<rep.data.length; i++){
                $scope.products.push({
                    id: rep.data[i].id,
                    designation: rep.data[i].designation,
                    unitPrice: rep.data[i].unitPrice,
                    availableQuantity: rep.data[i].availableQuantity
                });
            }
            $scope.$apply();
        }, function(error){
            console.log('error: ', error);
        });
    }
    init();

    /* Create product */
    $scope.createProduct = function (product) {
        
        //POST Request to
        var url = 'http://localhost:8080/products/';
        
        // Data
        $scope.product = {
            designation: product.designation,
            unitPrice: product.unitPrice,
            availableQuantity: product.availableQuantity
        };
        var data = $scope.product;
        
        // Config
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        $http.post(url, data, config)
        .then(function(rep){
            $window.location.href = '/products';
        },
        function(error){
            console.log('fail: ', error);
        });
    };

    $scope.updateProductInit = function() {
        var id = $routeParams.id;
        
        //Get Request to get one product by id
        // http://localhost:8080/products/{id}
        url = 'http://localhost:8080/products/'+id;

        $http.get(url).then(function(rep){
            $scope.product= {
                designation: rep.data.designation,
                unitPrice: rep.data.unitPrice,
                availableQuantity: rep.data.availableQuantity
            };
            $scope.$apply();
        }, function(error){
            console.log(error);
        });
    };

    $scope.updateProduct = function(product) {
        var data = product;
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        var id = $routeParams.id;

        //PUT request http://localhost:8080/products/{id}
        var  url = 'http://localhost:8080/products/'+id;
        $http.put(url, data, config).then(function(rep){
            $window.location.href = '/products';
        }, function(error){
            console.log('fail: ', error);
        });
    };

    $scope.removeModal = function(id){
        $rootScope.selectedId = id;
    }

    $scope.removeProduct = function() {

        $scope.delete = {
            success: false,
            fail: false
        };
        
        var id = $rootScope.selectedId;
        //DELETE request http://localhost:8080/products/{id}
        var url = 'http://localhost:8080/products/'+id;
        $http.delete(url).then(function(rep){
            $scope.delete.success = true;
            $scope.$apply();
        }, function(error){
            $scope.delete.fail = true;
            $scope.$apply();
            console.log(error);
        });
    };

    $scope.reload = function(){
        $route.reload();
    };
});