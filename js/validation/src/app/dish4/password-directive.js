function PasswordDirective() {
    return {
        restrict: 'A',
        require: "ngModel",
        scope: {
            password: '='
        },

        link: function(scope, element, attrs, ctrl) {

            scope.$watch(function() {
                var combined;
                if (scope.password || ctrl.$viewValue) {
                    combined = scope.password + '_' + ctrl.$viewValue;
                }
                return combined;
            }, function(value) {
                if (value) {
                    if (scope.password !== ctrl.$viewValue) {
                        ctrl.$setValidity("passwordVerify", false);
                    } else {
                        ctrl.$setValidity("passwordVerify", true);
                    }
                }
            });
        }
    }
}
