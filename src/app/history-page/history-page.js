var angular = require('angular');
var _ = require('lodash');

HistoryController.$inject = ['$scope', 'submitedOrders'];

function HistoryController($scope, submitedOrders) {
    $scope.items = _.map(submitedOrders.getOrders(), function (order) {
        return {
            orderProducts: _.map(order.orderItems, function (products) {
                return products.product.name;
            }).join(),
            date: order.date
        };
    });
}

CartComponent = {
    template: require('./history-page.html'),
    controller: HistoryController
}

module.exports = CartComponent;
