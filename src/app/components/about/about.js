import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AboutController from './about.controller';

let aboutModule = angular.module('about', [uiRouter])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('about', {
            url: '/about',
            template: require('./about.html'),
            controller: 'AboutController',
            controllerAs: 'about'
        });
})

.controller('AboutController', AboutController) 
.name;

export default aboutModule;