/**
 *  A directive which helps you easily show a baidu-map on your page.
 *
 *
 *  Usages:
 *
 *      <baidu-map options='options'></baidu-map>
 *
 *      options: The configurations for the map
 *            .center.longitude[Number]{M}: The longitude of the center point
 *            .center.latitude[Number]{M}: The latitude of the center point
 *            .zoom[Number]{O}:         Map's zoom level. This must be a number between 3 and 19
 *            .navCtrl[Boolean]{O}:     Whether to add a NavigationControl to the map
 *            .scaleCtrl[Boolean]{O}:   Whether to add a ScaleControl to the map
 *            .overviewCtrl[Boolean]{O}: Whether to add a OverviewMapControl to the map
 *            .enableScrollWheelZoom[Boolean]{O}: Whether to enableScrollWheelZoom to the map
 *            .city[String]{M}:         The city name which you want to display on the map
 *            .markers[Array]{O}:       An array of marker which will be added on the map
 *                   .longitude{M}:                The longitude of the marker
 *                   .latitude{M}:                 The latitude of the marker
 *                   .icon[String]{O}:             The icon's url for the marker
 *                   .width[Number]{O}:            The icon's width for the icon
 *                   .height[Number]{O}:           The icon's height for the icon
 *                   .title[String]{O}:            The title on the infowindow displayed once you click the marker
 *                   .content[String]{O}:          The content on the infowindow displayed once you click the marker
 *                   .enableMessage[Boolean]{O}:   Whether to enable the SMS feature for this marker window. This option only available when title/content are defined.
 *
 *  @author      Howard.Zuo
 *  @copyright   Jun 9, 2015
 *  @version     1.2.0
 *
 *  @author fenglin han
 *  @copyright 6/9/2015
 *  @version 1.1.1
 * 
 *  Usages:
 *
 *  <baidu-map options='options' ></baidu-map>
 *  comments: An improvement that the map should update automatically while coordinates changes
 *
 *  @version 1.2.1
 *  comments: Accounding to 史魁杰's comments, markers' watcher should have set deep watch equal to true, and previous overlaies should be removed
 *
 */
(function(global, factory) {
    'use strict';

    if (typeof exports === 'object') {
        module.exports = factory(require('angular'));
    } else if (typeof define === 'function' && define.amd) {
        define(['angular'], factory);
    } else {
        factory(global.angular);
    }

}(window, function(angular) {
    'use strict';

    var checkMandatory = function(prop, desc) {
        if (!prop) {
            throw new Error(desc);
        }
    };

    var defaults = function(dest, src) {
        for (var key in src) {
            if (typeof dest[key] === 'undefined') {
                // console.log(dest[key])
                dest[key] = src[key];
            }
        }
    };

    var baiduMapDir = function() {

        // Return configured, directive instance

        return {
            restrict: 'E',
            scope: {
                'options': '='
            },
            link: function($scope, element, attrs) {

                var defaultOpts = {
                    navCtrl: true,
                    scaleCtrl: true,
                    overviewCtrl: true,
                    enableScrollWheelZoom: true,
                    zoom: 10
                };

                var opts = $scope.options;

                defaults(opts, defaultOpts);

                checkMandatory(opts.center, 'options.center must be set');
                checkMandatory(opts.center.longitude, 'options.center.longitude must be set');
                checkMandatory(opts.center.latitude, 'options.center.latitude must be set');
                checkMandatory(opts.city, 'options.city must be set');

                // create map instance
                var map = new BMap.Map(element.find('div')[0]);

                // init map, set central location and zoom level
                map.centerAndZoom(new BMap.Point(opts.center.longitude, opts.center.latitude), opts.zoom);
                if (opts.navCtrl) {
                    // add navigation control
                    map.addControl(new BMap.NavigationControl());
                }
                if (opts.scaleCtrl) {
                    // add scale control
                    map.addControl(new BMap.ScaleControl());
                }
                if (opts.overviewCtrl) {
                    //add overview map control
                    map.addControl(new BMap.OverviewMapControl());
                }
                if (opts.enableScrollWheelZoom) {
                    //enable scroll wheel zoom
                    map.enableScrollWheelZoom();
                }
                // set the city name
                map.setCurrentCity(opts.city);


                if (!opts.markers) {
                    return;
                }
                //create markers

                var previousMarkers = [];

                var openInfoWindow = function(infoWin) {
                    return function() {
                        this.openInfoWindow(infoWin);
                    };
                };

                var mark = function() {

                    var i = 0;

                    for (i = 0; i < previousMarkers.length; i++) {
                        previousMarkers[i].removeEventListener('click', openInfoWindow(infoWindow2));
                        map.removeOverlay(previousMarkers[i]);
                    }
                    previousMarkers.length = 0;

                    for (i = 0; i < opts.markers.length; i++) {
                        var marker = opts.markers[i];
                        var pt = new BMap.Point(marker.longitude, marker.latitude);
                        var marker2;
                        if (marker.icon) {
                            var icon = new BMap.Icon(marker.icon, new BMap.Size(marker.width, marker.height));
                            marker2 = new BMap.Marker(pt, {
                                icon: icon
                            });
                        } else {
                            marker2 = new BMap.Marker(pt);
                        }

                        // add marker to the map
                        map.addOverlay(marker2);
                        previousMarkers.push(marker2);

                        if (!marker.title && !marker.content) {
                            return;
                        }
                        var infoWindow2 = new BMap.InfoWindow('<p>' + (marker.title ? marker.title : '') + '</p><p>' + (marker.content ? marker.content : '') + '</p>', {
                            enableMessage: !!marker.enableMessage
                        });
                        marker2.addEventListener('click', openInfoWindow(infoWindow2));
                    }
                };

                mark();

                $scope.$watch('options.center', function(newValue, oldValue) {

                    opts = $scope.options;
                    map.centerAndZoom(new BMap.Point(opts.center.longitude, opts.center.latitude), opts.zoom);
                    mark();

                }, true);

                $scope.$watch('options.markers', function(newValue, oldValue) {
                    mark();
                }, true);

            },
            template: '<div style="width: 100%; height: 100%;"></div>'
        };
    };

    var baiduMap = angular.module('baiduMap', []);
    baiduMap.directive('baiduMap', [baiduMapDir]);
}));