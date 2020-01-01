(function () {

    angular
        .module("app")
        .config(configurarRotas);

    configurarRotas.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configurarRotas($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("shell", { 
                    url: "",
                    templateUrl: "app/views/shell.html",
                    abstract: true,
                    controllerAs: "vm"
                })

                .state("repository", {
                    parent: "shell",
                    url: "/",
                    templateUrl: "app/views/repository.html"
                })
        ;

        $urlRouterProvider
            .otherwise(function ($injector) {
                var $state = $injector.get("$state");
                $state.go("repository");
            });

    }

})();