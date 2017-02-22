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