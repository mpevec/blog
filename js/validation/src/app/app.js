angular.module("app", [
    'ngRoute',
    'dish1',
    'dish2',
    'dish3',
    'dish4']);

angular.module("app").config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/menu', {
            templateUrl: 'app/menu.tpl.html'
        }).
        otherwise({redirectTo:'/menu'});
}]);

angular.module("app").controller("AppController", ['$scope', function($scope) {

}]);

