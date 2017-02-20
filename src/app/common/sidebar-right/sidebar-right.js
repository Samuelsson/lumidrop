import angular from 'angular';
import uiRouter from 'angular-ui-router';

import sidebarRightComponent from './sidebar-right.component';

let sidebarRightModule = angular.module('sidebar-right', [
    uiRouter
])

.component('sidebar-right', sidebarRightComponent)
  
.name;

export default sidebarRightModule;