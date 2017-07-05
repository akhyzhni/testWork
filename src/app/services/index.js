'use strict'

var angular = require('angular');
console.log('serv');
angular.module('app').service('orderService', require('./order.service'));
angular.module('app').service('productService', require('./product.service'));
angular.module('app').service('submitedOrders', require('./submited-orders.service'));
