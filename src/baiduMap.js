/**
 *  A directive which helps you easily show a baidu-map on your page.
 *
 *
 *  Usages:
 *
 *      <baidu-map options="options"></baidu-map>
 *
 *      options: The configurations for the map
 *            .width[Number]{M}:        The width of the map
 *            .height[Number]{M}:       The height of the map
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
 *
 *
 *  @author      Howard.Zuo
 *  @copyright   April 9, 2014
 *  @version     1.0.4
 *
 */
(function(angular) {
    "use strict";

    var defaults = {
        navCtrl: true,
        scaleCtrl: true,
        overviewCtrl: true,
        enableScrollWheelZoom: true,
        zoom: 10
    };

    var checkNull = function(obj) {
        return obj === null || obj === undefined;
    };

    var checkMandatory = function(prop, desc) {
        if (!prop) {
            throw new Error(desc);
        }
    };

    /**
     * Construction function     * Does not need any AngularJS DI
     *
     * @constructor
     */
    var baiduMapDir = function() {

        // Return configured, directive instance

        return {
            restrict: 'E',
            scope: {
                'options': '='
            },
            link: function($scope, element, attrs) {

                var ops = {};
                ops.navCtrl = checkNull($scope.options.navCtrl) ? defaults.navCtrl : $scope.options.navCtrl;
                ops.scaleCtrl = checkNull($scope.options.scaleCtrl) ? defaults.scaleCtrl : $scope.options.scaleCtrl;
                ops.overviewCtrl = checkNull($scope.options.overviewCtrl) ? defaults.overviewCtrl : $scope.options.overviewCtrl;
                ops.enableScrollWheelZoom = checkNull($scope.options.enableScrollWheelZoom) ? defaults.enableScrollWheelZoom : $scope.options.enableScrollWheelZoom;
                ops.zoom = checkNull($scope.options.zoom) ? defaults.zoom : $scope.options.zoom;

                checkMandatory($scope.options.width, 'options.width must be set');
                checkMandatory($scope.options.height, 'options.height must be set');
                checkMandatory($scope.options.center, 'options.center must be set');
                checkMandatory($scope.options.center.longitude, 'options.center.longitude must be set');
                checkMandatory($scope.options.center.latitude, 'options.center.latitude must be set');
                checkMandatory($scope.options.city, 'options.city must be set');

                ops.width = $scope.options.width;
                ops.height = $scope.options.height;
                ops.center = {
                    longitude: $scope.options.center.longitude,
                    latitude: $scope.options.center.latitude
                };
                ops.city = $scope.options.city;
                ops.markers = $scope.options.markers;

                element.find('div').css('width', ops.width + 'px');
                element.find('div').css('height', ops.height + 'px');

                // create map instance
                var map = new BMap.Map(element.find('div')[0]);

                // init map, set central location and zoom level
                map.centerAndZoom(new BMap.Point(ops.center.longitude, ops.center.latitude), ops.zoom);
                if (ops.navCtrl) {
                    // add navigation control
                    map.addControl(new BMap.NavigationControl());
                }
                if (ops.scaleCtrl) {
                    // add scale control
                    map.addControl(new BMap.ScaleControl());
                }
                if (ops.overviewCtrl) {
                    //add overview map control
                    map.addControl(new BMap.OverviewMapControl());
                }
                if (ops.enableScrollWheelZoom) {
                    //enable scroll wheel zoom
                    map.enableScrollWheelZoom();
                }
                // set the city name
                map.setCurrentCity(ops.city);


                if (!ops.markers) {
                    return;
                }
                //create markers

                var openInfoWindow = function(infoWin) {
                    return function() {
                        this.openInfoWindow(infoWin);
                    };
                };
                for (var i in ops.markers) {
                    var marker = ops.markers[i];
                    var pt = new BMap.Point(marker.longitude, marker.latitude);
                    var marker2;
                    if (marker.icon) {
                        var icon = new BMap.Icon(marker.icon, new BMap.Size(marker.width, marker.height));
                        marker2 = new BMap.Marker(pt, {
                            icon: icon
                        });
                    }
                    else {
                        marker2 = new BMap.Marker(pt);
                    }

                    // add marker to the map
                    map.addOverlay(marker2); // 将标注添加到地图中

                    if (!marker.title && !marker.content) {
                        return;
                    }
                    var infoWindow2 = new BMap.InfoWindow("<p>" + (marker.title ? marker.title : '') + "</p><p>" + (marker.content ? marker.content : '') + "</p>", {
                        enableMessage: checkNull(marker.enableMessage) ? false : marker.enableMessage
                    });
                    marker2.addEventListener("click", openInfoWindow(infoWindow2));
                }


            },
            template: '<div></div>'
        };
    };

    var baiduMap = angular.module('baiduMap', []);
    baiduMap.directive('baiduMap', [baiduMapDir]);

})(angular);
