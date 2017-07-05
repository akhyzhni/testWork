var angular = require('angular');

var app = require('./app/app');
require('./app/main.scss');

angular.element(document).ready(function () {
    angular.bootstrap(document.body, ['app']);
});



