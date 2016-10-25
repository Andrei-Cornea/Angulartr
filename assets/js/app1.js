(function(){
  var app = angular.module("carStore",[]);

  app.controller("StoreController",["$http","dataService",function($http, dataService){
    var vm = this;
    vm.cars =[];
    vm.filter={
      search:'',
      make:'',
      model:''
    }
    vm.models=[];

    $http.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc")
          .success(function(data){
        // vm.cars = data;
        vm.cars = dataService.processingData(data);

        // console.log(data);
    })

  // vm.getmodels= function(make){
  //   vm.cars.makes.filter(function(car){
  //     if(car.name === make){
  //       vm.models = car.models;
  //     }
  //   })
  // }

  }])

  app.controller("PanelController",function(){
    var vm = this;
    vm.tab=1;

    vm.selectTab = function(val){
      vm.tab= val;
    }
    vm.isSelected = function(selectedTab){
      return vm.tab === selectedTab;
    }
  })

  app.factory("dataService",function(){
    return{
      processingData: function(input){
        var cars =[];
        var result = input.makes.forEach(function(entry){
            var item={};
            item.name = entry.name;
            item.models =[];

             entry.models.forEach(function(model){
              item.models.push(model.name);
            });
            cars.push(item);
        })
        console.log(cars);

          return cars;
      }
    }
  })



})()
