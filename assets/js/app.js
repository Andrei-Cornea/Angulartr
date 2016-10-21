
(function(){
    var app = angular.module('carStore',[]);
    
    app.controller('StoreController',["$http","$scope",function($http,$scope){
          
        $http.get('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc')
        .success(function(response){ //make a get request to mock json file.
            $scope.cars = response; //Assign data received to $scope.data
            console.log(response);
            // console.log($scope.filter);
        })
        .error(function(err){
            //handle error
            console.log("Error:",err);
        });
        
          console.log($scope);
            }] );

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    app.controller('FiltersController',function(){
        this.filters={};
        this.addFilter = function(filters){
        
    };

    });


    // var gem=[
    // {
    //     name:"Dodecahedron",
    //     price:110.50,
    //     description:"some gem have hidden qualities beyond",
    //     canPurchase:true,
    //     soldOut:false
    // },
    // {
    //     name:"Dodecahedron",
    //     price:110.50,
    //     description:"some gem have hidden qualities beyond",
    //     canPurchase:true,
    //     soldOut:false
    // }]
})()