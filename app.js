///<reference path ="../angular.js" />
(function () {
    'user strict';

    var app = angular.module('app', []);
    app.controller('webServicesController', webServicesController);

    webServicesController.$inject = ['$scope', '$http'];

    function webServicesController($scope, $http) {
        // var employees = [
        //     { firstName: "Thuan", lastName: "Tran", gender: "Male", salary: 5000 },
        //     { firstName: "Thuan 1", lastName: "Tran 1", gender: "Male", salary: 1000 },
        //     { firstName: "Thuan 2", lastName: "Tran 2", gender: "Male", salary: 200 },
        //     { firstName: "Thuan 3", lastName: "Tran 3", gender: "Male", salary: 3000 },
        //     { firstName: "Thuan 4", lastName: "Tran 4", gender: "Femal", salary: 4000 }
        // ];
        // $scope.employees = employees;
        $http({
            method: 'GET',
            url: 'http://localhost:8080/products'
        }).then(function successCallback(response) {
            $scope.employees = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

})();