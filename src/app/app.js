var angular = require('angular');
require('angular-ui-router');

var app = angular.module('app',
    ['ui.router']);

require('./services');
require('./main-page');
require('./cart-page');
require('./history-page');


app.config(function ($stateProvider) {
    var mainState = {
        name: 'main',
        url: '/main',
        template: '<main-page></main-page>'
    }

    var cartState = {
        name: 'cart',
        url: '/cart',
        template: '<cart-page></cart-page>'
    }

    var historyState = {
        name: 'history',
        url: '/history',
        template: '<history-page></history-page>'
    }

    $stateProvider.state(mainState);
    $stateProvider.state(cartState);
    $stateProvider.state(historyState);
});