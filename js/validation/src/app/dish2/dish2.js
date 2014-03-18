angular.module("dish2", ['ngRoute']);

angular.module("dish2").config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/dish2', {
            controller:'Dish2Controller',
            templateUrl: 'app/dish2/dish2.tpl.html'
        })
}]);

angular.module("dish2").controller("Dish2Controller", ['$scope', Dish2Controller]);

angular.module("dish2").factory("BankAccountService", function() {return new BankAccountService()});

angular.module("dish2").directive("bankAccount", ['BankAccountService', BankAccountDirective]);