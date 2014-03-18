function UsernameService($timeout) {

    this.validate = function(username) {
        return $timeout(function() {
            if(username.substring(0, 5) == "12345") {
                return true;
            }
            return false;
        }, 5000);
    }
}
