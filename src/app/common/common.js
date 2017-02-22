import angular from 'angular';

import sidebarModule from './sidebar/sidebar';
import sidebarRightModule from './sidebar-right/sidebar-right';
import topbarModule from './topbar/topbar';

let commonModule = angular
    .module('app.common', [
        sidebarModule,
        sidebarRightModule,
        topbarModule
    ])
    .name;

export default commonModule;