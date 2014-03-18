function UsernameDirective(UsernameService) {
    return {
        restrict: 'A',
        require: "ngModel",
        scope: {
            hasFocus: "=username"
        },
        link: function(scope, element, attrs, ctrl) {

            scope.$watch('hasFocus', function(hasFocus) {
                if(angular.isDefined(hasFocus)) {

                    // on blur
                    if(!hasFocus) {
                        ctrl.$setValidity('checking', false);
                        UsernameService.validate(ctrl.$viewValue).then(function(resolvedData) {
                            if(resolvedData) {
                                ctrl.$setValidity('checking', true);
                                ctrl.$setValidity('username', true);
                            }
                            else {
                                ctrl.$setValidity('checking', true);
                                ctrl.$setValidity('username', false);
                            }
                        });
                    }

                    // on focus
                    else {
                        ctrl.$setValidity('username', true);
                        ctrl.$setValidity('checking', true);
                    }
                }
            })


        }

    }
}
