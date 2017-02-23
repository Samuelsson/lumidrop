/**
 * The root module bootstrapping the application and importing other modules.
 * Also applying base styles that are outside the actual app scope. Site wide on the body tag for example.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'normalize.css';
import './styles/main.scss';

import appComponent from './app.component';
import commonModule from './common/common.module';
import componentsModule from './components/components.module';
import sectionsModule from './sections/sections.module';

let appModule = angular
    .module('app', [
        uiRouter,
        componentsModule,
        commonModule,
        sectionsModule
    ])
    .component('app', appComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
    .name;

export default appModule;