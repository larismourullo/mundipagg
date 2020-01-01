(function () {

    angular
        .module("app", ["chart.js", "ui.router"])
        .run(inicializarApp);

    inicializarApp.$inject = [];

    function inicializarApp() {
    }

})();