var app = angular.module("meuPortfolio",[]);
app.controller("ctrl", function($scope, $http){
  $http.get("javascripts/portfolio.json").success(function(response){
    $scope.sites = response.sites;
    console.log(response);
  })
})