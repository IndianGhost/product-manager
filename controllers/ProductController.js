appModule.controller('ProductController', function($scope, $window, $routeParams, $rootScope, $route) {
    $scope.products = [];
    var db = firebase.firestore();

    function init() {
        //////////////////////////////////////////////////////////////////////
        // https://firebase.google.com/docs/firestore/query-data/get-data  //
        //////////////////////////////////////////////////////////////////////
        // Read data from collection "products"
        db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                $scope.products.push({
                    id: doc.id,
                    designation: doc.data().designation,
                    unitPrice: doc.data().unitPrice,
                    availableQuantity: doc.data().availableQuantity,
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
        
        //////////////////////////////////////////////////////////////////////
        // https://firebase.google.com/docs/firestore/manage-data/add-data  //
        //////////////////////////////////////////////////////////////////////
        // Add a new document in collection "products"
        // the function makeid(integer) is declared in assets/js/helpers.js
        db.collection("products").doc(makeid(15))
        .set($scope.product)
        .then(function() {
            console.log("Document successfully written!");
            $window.location.href = '/products';
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    };

    $scope.updateProductInit = function() {
        var id = $routeParams.id;
        console.log('id init : ', id);
        query = db.collection("products").doc(id).get()
        .then(function(doc) {
            if(doc.exists){
                $scope.product = {
                    designation: doc.data().designation,
                    unitPrice: doc.data().unitPrice,
                    availableQuantity: doc.data().availableQuantity
                };
                $scope.$apply();
            }
            else{
                console.log("No such document !");
            }
        })
        .catch(function(error){
            console.log("Error getting document: ", error);
        });
    };

    $scope.updateProduct = function(product) {
        var id = $routeParams.id;

        db.collection("products").doc(id)
        .set($scope.product)
        .then(function() {
            console.log("Document successfully written!");
            $window.location.href = '/products';
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    };

    $scope.removeModal = function(id){
        $rootScope.selectedId = id;
    }

    $scope.removeProduct = function(id) {
        var id = $rootScope.selectedId;
        
        db.collection("products").doc(id).delete()
        .then(function() {
            $scope.delete = {
                success: true,
                fail: false
            };
            $scope.$apply();
        })
        .catch(function(error) {
            console.error("Error removing document: ", error);
            $scope.delete = {
                success: false,
                fail: true
            };
            $scope.$apply();
        });
    };

    $scope.reload = function(){
        $route.reload();
    };
});