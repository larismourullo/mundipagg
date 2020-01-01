(function(){
  
    angular
        .module("app")
        .factory("apiRepositories", apiRepositories);

    apiRepositories.$inject = ["$http", "urlBaseUsers", "organization"];

    function apiRepositories($http, urlBaseUsers, organization) {

        var service = {
            allRepositories: allRepositories
        }

        return service;

        //------//

        function allRepositories() {
            return $http.get(urlBaseUsers + organization + "repos");
        }

    }
  
}());