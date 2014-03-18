angular.module('dish1', ['ngRoute']);

angular.module("dish1").config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/dish1', {
            controller:'Dish1Controller',
            templateUrl: 'app/dish1/dish1.tpl.html'
        })
}]);

angular.module("dish1").controller("Dish1Controller", ['$scope', Dish1Controller]);


