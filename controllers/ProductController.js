appModule.controller('ProductController', function($scope, $window) {
    $scope.products = [];
    var db = firebase.firestore();

    function init() {
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
        db.collection("products").doc($scope.product.designation)
        .set($scope.product)
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        $window.location.href = '/products';
    }
});