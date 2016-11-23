(function(){
      
    
    var app = angular.module("gemStore", ["store-directives"]);
    
    app.controller("StoreController", ["$http", function($http){
        var store = this;
        store.products = [];
        $http.get("/script/store-products.json").success(function(data){
           store.products = data; 
        }).error(function(data){
            console.log(data);
        });
    }]);
    
    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });   
    
    
})();
