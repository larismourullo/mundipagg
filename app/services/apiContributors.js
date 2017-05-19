(function(){
  
    angular
        .module("app")
        .factory("apiContributors", apiContributors);

    apiContributors.$inject = ["$http", "urlBaseRepos", "organization"];

    function apiContributors($http, urlBaseRepos, organization) {

        var service = {
            getContributors: getContributors
        }

        return service;

        //------//

        function getContributors(repositoryName) {
            return $http.get(urlBaseRepos + organization + repositoryName + "/contributors");               
        }

    }
  
}());