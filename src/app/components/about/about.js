import angular from 'angular';
import uiRouter from 'angular-ui-router';

import aboutComponent from './about.component';

let aboutModule = angular
    .module('about', [uiRouter])
    .component('about', aboutComponent)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('about', {
                url: '/about',
                component: 'about'
            });
    })
    .name;

export default aboutModule;