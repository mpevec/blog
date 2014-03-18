function BankAccountDirective(BankAccountService) {
    return {
        restrict: 'A',
        require: "ngModel",
        //priority: 10,                 //ne rabim po moje
        scope: {},

        link: function(scope, element, attrs, ctrl) {

            ctrl.$parsers.push(function(viewValue) {
                if(viewValue) {

                    if (BankAccountService.validate(viewValue)) {
                        ctrl.$setValidity('bankAccount', true);
                        return viewValue;
                    }
                    else {
                        // it is invalid, return undefined (no model update)
                        ctrl.$setValidity('bankAccount', false);
                        return undefined;
                    }
                }
            });
        }
    }
}
