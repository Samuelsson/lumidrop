import angular from 'angular';

import sidebar from './sidebar/sidebar';

let commonModule = angular.module('common', [
    sidebar,
])

.name;

export default commonModule;