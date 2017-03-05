var app = angular.module('myApp');

app.factory('productService', function($http) {

	var getAll = function() {
		return $http.get("http://localhost:9000/fresherangular/product/list")
				.then(function(response) {
					return response.data;
				});
	};

	var addProduct = function(product) {
		return $http.post("http://localhost:9000/fresherangular/product/add", product).then(function(response) {
			return response.data;
		});
	}
	var deleteProduct = function(id) {
		return $http.get("http://localhost:9000/fresherangular/product/delete/" + id).then(function(response) {
			return response.data;
		});
	}
	var detailProduct = function(id) {
		return $http.get("http://localhost:9000/fresherangular/product/get/" + id).then(function(response) {
			return response.data;
		});
	}
	var increaseAvailable = function(id) {
		return $http.get("http://localhost:9000/fresherangular/product/increase/" + id).then(function(response) {
			return response.data;
		});
	}
	var decreaseAvailable = function(id) {
		return $http.get("http://localhost:9000/fresherangular/product/decrease/" + id).then(function(response) {
			return response.data;
		});
	}

	return {
		getAll : getAll,
		addProduct : addProduct,
		deleteProduct : deleteProduct,
		detailProduct : detailProduct,
		increaseAvailable : increaseAvailable,
		decreaseAvailable : decreaseAvailable
	}
});