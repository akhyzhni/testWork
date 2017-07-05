var _ = require('lodash');

function orderService() {

    var productList = [];

    function addProduct(item) {
        var addedProduct = _.find(productList, { product: item });

        if (addedProduct) {
            addedProduct.count++;
        } else {
            productList.push({
                product: item,
                count: 1
            });
        }
    };

    function removeProduct(item) {
        var addedProduct = _.find(productList, { product: item });

        if (addedProduct) {
            if (addedProduct.count === 1) {
                _.remove(productList, addedProduct);
            } else {
                addedProduct.count--;
            }
        }
    };

    function clean() {
        productList = []
    };

    function getProducts() {
        return _.cloneDeep(productList);
    }

    return {
        addProduct: addProduct,
        removeProduct: removeProduct,
        getProducts: getProducts,
        clean: clean
    };
};

module.exports = orderService;