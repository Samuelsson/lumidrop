import angular from 'angular';

import sidebar from './sidebar/sidebar';
import sidebarRight from './sidebar-right/sidebar-right';
import topbar from './topbar/topbar';

let commonModule = angular.module('app.common', [
    sidebar,
    sidebarRight,
    topbar
])

.name;

export default commonModule;