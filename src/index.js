import angular from 'angular';
import {defaultOpts, defaultOfflineOpts} from './defaults';
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
            ak: '@',
            offline: '='
        },
        link: function($scope, element, attrs) {

            var opts = angular.extend({}, defaultOpts, $scope.options);
            var offlineOpts = angular.extend({}, defaultOfflineOpts, $scope.offline);
            $scope.offlineWords = offlineOpts.txt;
            validator($scope.ak, 'ak must not be empty');
            validator(opts.center, 'options.center must be set');
            validator(opts.center.longitude, 'options.center.longitude must be set');
            validator(opts.center.latitude, 'options.center.latitude must be set');
            validator(opts.city, 'options.city must be set');

            loader($scope.ak, offlineOpts, function() {

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

            $scope.divStyle = {
                width: '100%',
                height: '100%',
                backgroundColor: '#E6E6E6',
                position: 'relative',
                opacity: 0
            };

            $scope.labelStyle = {
                fontSize: '30px',
                position: 'absolute',
                top: '50%',
                marginTop: 0,
                left: '50%',
                marginLeft: 0
            };

            setTimeout(function() {
                var $label = document.querySelector('baidu-map div label');
                $scope.labelStyle.marginTop = $label.clientHeight / -2 + 'px';
                $scope.labelStyle.marginLeft = $label.clientWidth / -2 + 'px';
                $scope.$apply();
            });

        },
        template: '<div ng-style="divStyle"><label ng-style="labelStyle">{{ offlineWords }}</label></div>'
    });

    return name;
}());
