import angular from 'angular';

import sidebar from './sidebar/sidebar';
import topbar from './topbar/topbar';

let commonModule = angular.module('common', [
    sidebar,
    topbar
])

.name;

export default commonModule;