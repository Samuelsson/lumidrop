import angular from 'angular';

import homeModule from './home/home.module';
import aboutModule from './about/about.module';

let sectionsModule = angular
    .module('app.sections', [
        homeModule,
        aboutModule
    ])
    .name;

export default sectionsModule;