function Dish4Controller($scope) {
    $scope.dish = {};

    $scope.submit = function() {
        alert("Submit dish4, password: " + $scope.dish.password + " password repeated: " + $scope.dish.passwordr);
    }
}

