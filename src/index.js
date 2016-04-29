import angular from 'angular';
import {defaultOpts} from './defaults';
import {validator} from './validator';
import {def} from './directiveDef';
import {loader} from './baiduScriptLoader';

import {createInstance, redrawMarkers} from './map';

export const ngBaiduMap = (function() {
    var name = 'baiduMap';

    def(name, {
        restrict: 'E',
        scope: {
            options: '=',
            ak: '@'
        },
        link: function($scope, element, attrs) {

            var opts = angular.extend({}, defaultOpts, $scope.options);
            validator($scope.ak, 'ak must not be empty');
            validator(opts.center, 'options.center must be set');
            validator(opts.center.longitude, 'options.center.longitude must be set');
            validator(opts.center.latitude, 'options.center.latitude must be set');
            validator(opts.city, 'options.city must be set');

            loader($scope.ak, function() {

                var map = createInstance(opts, element);

                //create markers
                var previousMarkers = [];

                redrawMarkers(map, previousMarkers, opts);

                $scope.$watch('options.center', function(newValue, oldValue) {

                    opts = $scope.options;
                    map.centerAndZoom(new BMap.Point(opts.center.longitude,
                        opts.center.latitude), opts.zoom);
                    redrawMarkers(map, previousMarkers, opts);

                }, true);

                $scope.$watch('options.markers', function(newValue, oldValue) {
                    redrawMarkers(map, previousMarkers, opts);
                }, true);

            });
        }
    });

    return name;
}());
