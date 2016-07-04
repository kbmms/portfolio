var app = angular.module("appcartola", []);

app.controller('HomeCtrl', function($http, $scope){
    $scope.destaques = [];
    $http.get('https://api.cartolafc.globo.com/mercado/destaques', {
        headers:{
            "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Origin":"localhost/cartoleiro-da-rodada",
"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        }
    })
    .success(function(response){

    angular.forEach(response, function(dados){
        console.log(dados);
         $scope.destaques.push(dados);

    });


});




});