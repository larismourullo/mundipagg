(function(){
  
    angular
        .module("app")
        .factory("apiCommits", apiCommits);

    apiCommits.$inject = ["$http", "urlBaseRepos", "organization"];

    function apiCommits($http, urlBaseRepos, organization) {

        var service = {
            getCommits: getCommits
        }

        return service;

        //------//

        function getCommits(repositoryName) {
            return $http.get(urlBaseRepos + organization + repositoryName + "/commits");           
        }

    }
  
}());