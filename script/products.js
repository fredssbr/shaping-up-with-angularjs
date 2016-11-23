(function(){
    var app = angular.module("store-directives", []);
    
    app.controller('TabController', function(){
        this.tab = 1;
        this.setTab = function(tab){
          this.tab = tab;
        };
        this.isSet = function(tab){
          return this.tab == tab;
        };
    });
    
    app.controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function(current){
          if(!current){
            current = 0;
          }
          this.current = current;
        };
    });
    
    //dash in html translates to camelCase in JavaScript
    app.directive('productDescription', function(){
        //it expects returning a configuration file
        return {
            restrict: 'E', //Type of directive (E for element)
            templateUrl: 'product-description.html' //URL of the template
            
        };
    });
    
    app.directive("productSpecs", function(){
        return {
            restrict: "A",
            templateUrl: "product-specs.html"
        };
    });
    
    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
    });
    
    app.directive("productTabs", function() {
        return {
            restrict: 'E',
            templateUrl: "product-tabs.html",
            controller: "TabController as tab"
        };
    });
    
    app.directive("productGallery", function() {
        return {
            restrict: 'E',
            templateUrl: "product-gallery.html",
            controller: "GalleryController as gallery"
        };
    });
    
})();