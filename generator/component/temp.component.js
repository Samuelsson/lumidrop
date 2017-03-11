import template from './<%= snakeCaseName %>.html';
import controller from './<%= snakeCaseName %>.controller';
import './<%= snakeCaseName %>.scss';

let <%= name %>Component = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default <%= name %>Component;