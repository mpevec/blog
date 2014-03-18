function Dish1Controller($scope) {
    $scope.dish = {};

    $scope.submit = function() {
        alert("Submit dish1, tax number: " + $scope.dish.taxNumber);
    }
}

