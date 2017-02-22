import angular from 'angular';
import uiRouter from 'angular-ui-router';

import sidebarRightComponent from './sidebar-right.component';

let sidebarRightModule = angular
    .module('sidebarRight', [uiRouter])
    .component('sidebarRight', sidebarRightComponent)
    .name;

export default sidebarRightModule;