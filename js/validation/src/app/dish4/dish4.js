angular.module("dish4", ['ngRoute']);

angular.module("dish4").config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/dish4', {
            controller: 'Dish4Controller',
            templateUrl: 'app/dish4/dish4.tpl.html'
        })
}]);

angular.module("dish4").controller("Dish4Controller", ['$scope', Dish4Controller]);

angular.module("dish4").directive("password", PasswordDirective);
