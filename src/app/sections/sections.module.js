/**
 * Sections Module
 *
 * All page specific files used in ui-view by the ui-router. Pages that can be navigated to in one way or another.
 * Many of these could be accessible from the navigation menu.
 */
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