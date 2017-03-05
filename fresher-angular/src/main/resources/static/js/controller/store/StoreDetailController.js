var app = angular.module('myApp');

app.controller("StoreDetailController", function($scope,productService, $http, $routeParams) {
	
	var id = $routeParams.id;
	
	$scope.product ={
		name:"",
		model:"",
		year:"",
		price:"",
		producer:"",
		available:""
	};
	
	productService.detailProduct(id)
	.then(function(data){		
		$scope.product = data;
	});					
    
});