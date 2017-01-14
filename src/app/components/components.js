import angular from 'angular';

import home from './home/home';
import about from './about/about';

let componentModule = angular.module('components', [
    home,
    about
])

.name;

export default componentModule;