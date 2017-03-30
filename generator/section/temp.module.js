import angular from 'angular';
import uiRouter from 'angular-ui-router';

import <%= name %>Component from './<%= snakeCaseName %>.component';
import <%= name %>Service from './<%= snakeCaseName %>.service';

let <%= name %>Module = angular
    .module('<%= name %>', [uiRouter])
    .component('<%= name %>', <%= name %>Component)
    .service('<%= upperCaseName %>Service', <%= upperCaseName %>Service)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('<%= name %>', {
                url: '/<%= name %>',
                component: '<%= name %>'
            });
    })
    .name;

export default <%= name %>Module;