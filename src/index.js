var angular = require('angular');
var app = angular.module('ng-twitter-typeahead', []);

app.factory('TwitterTypeaheadArrayDataProviderFactory', require('./array-data-provider-factory'));
app.directive('twitterTypeahead', require('./directive'));

module.exports = app.name;