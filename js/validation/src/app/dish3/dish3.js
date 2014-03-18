angular.module("dish3", ['ngRoute']);

angular.module("dish3").config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/dish3', {
            controller: 'Dish3Controller',
            templateUrl: 'app/dish3/dish3.tpl.html'
        })
}]);

angular.module("dish3").controller("Dish3Controller", ['$scope', Dish3Controller]);

angular.module("dish3").factory('UsernameService', ['$timeout', function($timeout) {return new UsernameService($timeout)}]);

angular.module("dish3").directive("username", ['UsernameService', UsernameDirective]);
