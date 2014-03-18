function Dish2Controller($scope) {
    $scope.dish = {};

    $scope.submit = function() {
        alert("Submit dish2, bank account: " + $scope.dish.bankAccount);
    }
}

