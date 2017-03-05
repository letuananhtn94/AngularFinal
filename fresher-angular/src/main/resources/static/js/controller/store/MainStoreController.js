var app = angular.module('myApp');

app.controller("MainStoreController", function($scope, productService, $http) {
	
	$scope.searchAll =  function(){
		productService.getAll().then(onSucces,onError);
    };
    
    var onSucces = function(data){
    	$scope.products = data;
    };
    
    var onError = function(error){
    	$scope.error = "Could not find data";    
    };
	
	$scope.product ={
		name:"",
		model:"",
		year:"",
		price:"",
		producer:"",
		available:""
	};
	
	$scope.products = [];
	
	
	$scope.addProduct = function(){		
		productService.addProduct($scope.product).then(addProductSucces, addProductError);
		
	};
	var addProductSucces = function(res){
		$scope.succesMesage = "Add product success!"
		console.log(res);
	    $scope.searchAll();
	};
	var addProductError = function(err){
		$scope.errorMesage = "Add product error!"
		console.log(err);
	};
		
	$scope.increaseAvailable = function(id) {
		productService.increaseAvailable(id)
    	.then(function(res){
    		console.log(res);
    		$scope.searchAll();
    	});   	
    }
	
    $scope.decreaseAvailable = function(index, id) {
    	
		if($scope.products[index].available >= 1){
			productService.decreaseAvailable(id)
	    	.then(function(res){
	    		console.log(res);
	    		$scope.searchAll();
	    	});   	
		}
    }
    
    $scope.deleteProduct = function(id) {
    	if (confirm("Are you sure?"))
        {
    		productService.deleteProduct(id)
        	.then(function(res){
        		console.log(res);
        		$scope.searchAll();
        	});
        }    	
    	
    }
            
});


app.directive('ngListProduct', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '/fresherangular/views/store/list-product.html'
	}
});