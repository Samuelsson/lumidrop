import angular from 'angular';

import homeModule from './home/home.module';
import aboutModule from './about/about.module';

let componentModule = angular
    .module('app.components', [
        homeModule,
        aboutModule
    ])
    .name;

export default componentModule;