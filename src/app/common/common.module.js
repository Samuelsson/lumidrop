/**
 * Common Module
 *
 * Containing shared components that are application specific and not intended to be used in other projects.
 * This is for example layout specific components like navigation and header.
 */
import angular from 'angular';

import sidebarModule from './sidebar/sidebar.module';
import sidebarRightModule from './sidebar-right/sidebar-right.module';
import topbarModule from './topbar/topbar.module';

let commonModule = angular
    .module('app.common', [
        sidebarModule,
        sidebarRightModule,
        topbarModule
    ])
    .name;

export default commonModule;