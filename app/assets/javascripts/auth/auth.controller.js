    function AuthController($state, Auth) {

        var vm = this;

        //callable methods on the vm
        vm.login = login;
        vm.register = register;

        //defined methods on the vm
        function login() {
            Auth.login(vm.user)
                .then(goToBreweries);
        };

        function register() {
            Auth.register(vm.user)
                .then(goToBreweries);
        };

        function goToBreweries() {
            $state.go('home.breweries');
        };

    };

    AuthController.$inject = ['$state', 'Auth'];

    angular
        .module('app')
        .controller('AuthController', AuthController);
