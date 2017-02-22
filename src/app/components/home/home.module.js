import angular from 'angular';
import uiRouter from 'angular-ui-router';

import homeComponent from './home.component';

let homeModule = angular
    .module('home', [uiRouter])
    .component('home', homeComponent)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            });
    })
    .name;

export default homeModule;