import angular from 'angular';

import homeModule from './home/home';
import aboutModule from './about/about';

let componentModule = angular
    .module('app.components', [
        homeModule,
        aboutModule
    ])
    .name;

export default componentModule;