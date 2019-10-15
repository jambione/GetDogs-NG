"use strict";

angular
    .module('main')
    .factory('mainService', mainService);

    mainService.$inject = ['$log'];

function mainService($log) {
    const service = {
        getDog : getDog,
        dog : ''
    }

    return service;

    function getDog(){
        const url = 'https://dog.ceo/api/breeds/image/random';
        return axios.get(url);
    }

}
