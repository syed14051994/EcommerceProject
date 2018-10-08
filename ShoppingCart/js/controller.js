'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    $scope.productsList=["Fruits","Vegetable","Grocery"];
    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;
    $scope.username = "aamir";
    // apply changes when cart items change
    $scope.cart.itemsChanged = function (e) {
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    }

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}

function productController($scope, $routeParams, DataService) {
   $scope.store = DataService.store;
   if($routeParams.productName != null)
   {
        $scope.selectedCommodityList = $scope.store.getProductList($routeParams.productName);
   }


}