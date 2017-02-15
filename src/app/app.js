import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'normalize.css';
import './styles/main.scss';

import common from './common/common';
import components from './components/components';
import appComponent from './app.component';

angular.module('app', [
    uiRouter,
    components,
    common
])

.config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
})

.component('app', appComponent);