var _ = require('lodash');

function productsService() {

    var ingridients = ['tomato', 'cheese', 'wine', 'bread', 'garlic'];
    var productNames = ['pizza', 'burger','cola', 'pinacolada', 'ceaser', 'tunasalad','chiliconcarne','tofy'];

    var products = _.map(productNames, function (val, index) {
        var currentIngridients = _(ingridients)
            .shuffle()
            .slice(2)
            .value();

        return {
            number: index,
            name: val,
            price: _.random(10),
            ingridients: currentIngridients
        };
    });

    return {
        getProducts: function () { return products; }
    };
};

module.exports = productsService;