"use strict";

angular
    .module('main')
    .controller('mainController', mainController);

mainController.$inject = ['$scope', '$log', 'mainService'];    

function mainController($scope, $log, mainService){
    $scope.yourName = '';
    $scope.dog = '';
    $scope.getDogPicture = function() {
        mainService.getDog().then(function(response) {
            $scope.dog  = response.data.message;
            $scope.$apply();
        });
    }
}