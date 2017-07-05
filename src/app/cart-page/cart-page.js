require('./cart-page.scss');
var angular = require('angular');
var _ = require('lodash');

CartController.$inject = ['$scope', 'productService', 'orderService', 'submitedOrders'];

function CartController($scope, productService, orderService, submitedOrders) {
    initialize();

    function initialize() {
        $scope.items = orderService.getProducts();
        $scope.summ = 0;

        _.forEach($scope.items, function (orderItem) {
            $scope.summ = $scope.summ + orderItem.product.price * orderItem.count;
        })
    }

    $scope.orderByFunc = function (product) {
        if (_.isUndefined($scope.reverse)) {
            return product.number;
        } else {
            return $scope.reverse ? -product.price : product.price;
        }
    }

    $scope.submitOrder = function () {
        submitedOrders.addOrder(angular.copy($scope.items));
        orderService.clean();

        initialize();
    }

    $scope.remove = function (product) {
        orderService.removeProduct(product);

        initialize();
    }
}

CartComponent = {
    template: require('./cart-page.html'),
    controller: CartController
}

module.exports = CartComponent;
