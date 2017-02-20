import angular from 'angular';

import sidebar from './sidebar/sidebar';
import rightsidebar from './rightsidebar/rightsidebar';
import topbar from './topbar/topbar';

let commonModule = angular.module('app.common', [
    sidebar,
    rightsidebar,
    topbar
])

.name;

export default commonModule;