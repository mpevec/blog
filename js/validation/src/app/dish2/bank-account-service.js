function BankAccountService() {
    this.validate = function(number) {
        if(number.substring(0, 5) == "12345") {
            return true;
        }
        return false;
    }
}
