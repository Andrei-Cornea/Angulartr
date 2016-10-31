(function(){
  var app = angular.module("carStore",['ui.bootstrap']);

  app.controller("StoreController",["$http","dataService","$uibModal","$log","$document",function($http, dataService, $uibModal,  $log, $document){
    var vm = this;
    vm.cart=[];
    vm.itemsInCart = null ;

    dataService.getData().then(function(data){
      vm.cars = data;
        console.log(vm.cars );
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
           vm.itemsInCart = vm.cart.length;
           console.log("added");
        }
        console.log(vm.cart);
    }

    vm.removeCartItem= function(item){
      // console.log(item);
      vm.cart.splice(item,1);
      vm.itemsInCart = vm.cart.length;
      console.log(vm.cart);
      console.log("removed!");
    }


    vm.openModal = function(size){
      var modalInstance = $uibModal.open({
        animation: "true",
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        size: size,
        resolve: {
                itemsInCart: function(){
                  return vm.itemsInCart;
                },
                cart: function () {
                  return  vm.cart;
                }
              }
      })
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

  app.factory("dataService",['$http',function($http){
    var data = {};
    data.models=[];
    data.name=[];

    var getData = function(){
         return  $http.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc")
             .then(function(response){

                     response.data.makes.forEach(function(entry){
                       data.name.push(entry.name);
                         entry.models.forEach(function(model){
                           data.models.push({name:model.name,make:entry.name});
                         });

                     })

                     console.log(data);
                     return data;
                   })
           }

        return{
          getData: getData
        }

  }])


})()

angular.module('carStore').controller('ModalInstanceCtrl', function ($uibModalInstance, cart) {

  var vm = this;
  vm.cart = cart;
  vm.itemsInCart = vm.cart.length;
  // vm.selected = {
  //   item: vm.items[0]
  // };

  vm.ok = function () {
    $uibModalInstance.close("true");
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

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
