import angular from 'angular';

export const def = function(name, ddo) {
    angular.module(name, [])
        .directive(name, [function() {
            return ddo;
        }]);
};
