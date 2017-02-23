/**
 * Components Module
 *
 * Components are pieces of functionality within the application that are re-usable.
 * Should be self contained and not depend on anything outside the component. Easily exported to other projects.
 * To keep the code clean and apply the DRY principle.
 */
import angular from 'angular';

let componentsModule = angular
    .module('app.components', [])
    .name;

export default componentsModule;