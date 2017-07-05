var angualr = require('angular');
require('./main-page.scss');

MainPageController.$inject = ['$scope', 'productService', 'orderService'];

function MainPageController($scope, productService, orderService) {
    $scope.items = productService.getProducts();

    $scope.addProduct = function (product) {
        orderService.addProduct(angular.copy(product));
        alert('product ' + product.name + ' added successfully')
    };

    $scope.orderByFunc = function (product) {
        if (_.isUndefined($scope.reverse)) {
            return product.number;
        } else {
            return $scope.reverse ? -product.price : product.price;
        }
    }
};

MainPageComponent = {
    template: require('./main-page.html'),
    controller: MainPageController,
};

module.exports = MainPageComponent;
