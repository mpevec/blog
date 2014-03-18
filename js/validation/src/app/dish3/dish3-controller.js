function Dish3Controller($scope) {
    $scope.dish = {};

    $scope.submit = function() {
        alert("Submit dish3, username: " + $scope.dish.username);
    }
}

