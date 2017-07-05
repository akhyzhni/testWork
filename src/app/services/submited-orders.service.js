var _ = require('lodash');

function Service() {
    var orderList = [];

    function _addOrder(orders) {
        orderList.push({
            orderItems: orders,
            date: new Date()
        });
    };

    function getOrders() {
        return _.cloneDeep(orderList);
    }

    return {
        addOrder: _addOrder,
        getOrders: getOrders,
    };
};

module.exports = Service;