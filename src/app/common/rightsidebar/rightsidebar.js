import angular from 'angular';
import uiRouter from 'angular-ui-router';

import rightSidebarComponent from './rightsidebar.component';

let rightSidebarModule = angular.module('rightsidebar', [
    uiRouter
])

.component('rightsidebar', rightSidebarComponent)
  
.name;

export default rightSidebarModule;