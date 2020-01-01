(function(){

	angular
    	.module("app")
    	.constant("urlBaseUsers", "https://api.github.com/users/")
    	.constant("urlBaseRepos", "https://api.github.com/repos/")
    	.constant("organization", "mundipagg/");
  
}());