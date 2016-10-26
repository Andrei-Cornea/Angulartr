(function(){
  var app = angular.module("carStore",[]);

  app.controller("StoreController",["$http","dataService",function($http, dataService){
    var vm = this;
    vm.cart=[];

    $http.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc")
          .success(function(data){
        // vm.cars = data;
        vm.cars = dataService.processingData(data);

        console.log(vm.cars);
    })

    vm.addToCart = function(val){
        var add = true;

        vm.cart.forEach(function(item){
              if(item.model === val.model ){
                  add=false;
              }
        })

        if(add){
           vm.cart.push(val);
           console.log("added");
        }
        console.log(vm.cart);
    }


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
        var data = {};
        data.models=[];
        data.name=[];

        input.makes.forEach(function(entry){

          data.name.push(entry.name);
          entry.models.forEach(function(model){
            data.models.push({name:model.name,make:entry.name});
          });

        })
        // console.log(data);

        return data;
      }
    }
  })


})()


// app.factory("dataService",function(){
//   return{
//     processingData: function(){
//       var data = {};
//       data.models=[];
//       data.name=[];
//
//       input.makes.forEach(function(entry){
//
//         data.name.push(entry.name);
//         entry.models.forEach(function(model){
//           data.models.push({name:model.name,make:entry.name});
//         });
//
//       })
//       // console.log(data);
//
//       return data;
//     }
//   }
// })



// vm.getmodels= function(make){
//   vm.cars.makes.filter(function(car){
//     if(car.name === make){
//       vm.models = car.models;
//     }
//   })
// }
