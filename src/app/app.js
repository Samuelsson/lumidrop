import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'normalize.css';
import './styles/main.scss';

import appComponent from './app.component';
import commonModule from './common/common';
import componentsModule from './components/components';

let appModule = angular
    .module('app', [
        uiRouter,
        componentsModule,
        commonModule
    ])
    .component('app', appComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
    .name;

export default appModule;