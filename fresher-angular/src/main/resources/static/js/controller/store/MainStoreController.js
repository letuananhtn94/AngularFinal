
app.controller("MainStoreController", function($scope, $http) {
	
	$scope.messape ='';
	$scope.hideDialog = function(){
		$scope.message = message;
		$scope.dialogIsHidden = true;
	}
	
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
		console.log($scope.product);
		$http.post("http://localhost:9000/fresherangular/product/add", $scope.product)
    	.then(addProductSucces, addProductError);
		
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
		
	$scope.increaseAvailable = function(index, id) {
		
		$http.get("http://localhost:9000/fresherangular/product/increase/"+ id)
    	.then(function(res){
    		console.log(res);
    		$scope.products[index].available = res.data.available;
    	});
    	
    }
	
    $scope.decreaseAvailable = function(index, id) {
    	
		if($scope.products[index].available >= 1){
			$http.get("http://localhost:9000/fresherangular/product/decrease/" + id)
	    	.then(function(res){
	    		$scope.products[index].available = res.data.available;
	    	});
		}
    }
    
    $scope.deleteProduct = function(id) {
    	    	
    	$http.get("http://localhost:9000/fresherangular/product/delete/"+ id)
    	.then(function(res){
    		console.log(res);
    		$scope.searchAll();
    	});
    }
    
    $scope.searchAll = function(){
    	$http.get("http://localhost:9000/fresherangular/product/list")
    	.then(onSucces, onError);
    };
    
    var onSucces = function(response){
    	$scope.products =response.data;
    };
    
    var onError = function(error){
    	$scope.error = "Could not find data";    
    };
        
});


app.directive('ngListProduct', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '/fresherangular/views/store/list-product.html'
	}
});