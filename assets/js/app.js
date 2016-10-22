
(function(){
    var app = angular.module('carStore',[]);
    
    app.controller('StoreController',["$http","$scope",function($http,$scope){
       
        $http({
            method: 'GET',
            url: 'http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.cars=response.data;
                // console.log($scope.cars);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("No response from the server!")
            });
              

                console.log( $scope)

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