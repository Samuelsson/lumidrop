import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeController from './home.controller';

let homeModule = angular.module('home', [uiRouter])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
})

.controller('HomeController', HomeController) 
.name;

export default homeModule;