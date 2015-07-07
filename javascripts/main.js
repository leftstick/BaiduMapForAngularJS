(function(ng) {
    'use strict';

    var demo = ng.module('demo', ['baiduMap']);

    demo.controller('demoCtrl', function($scope) {
        $scope.markerAdded = false;
        $scope.defMarker = false;

        var longitude = 121.506191;
        var latitude = 31.245554;
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            city: 'ShangHai',
            markers: [
                {
                    longitude: longitude,
                    latitude: latitude,
                    icon: 'images/mappiont.png',
                    width: 30,
                    height: 45,
                    title: 'Where',
                    content: 'Put description here'
                }
            ]
        };

        $scope.addMarker = function() {
            $scope.markerAdded = true;
            $scope.mapOptions.markers.push({
                longitude: 121.509846,
                latitude: 31.245249,
                icon: 'images/mappiont.png',
                width: 30,
                height: 45
            });
        };

        $scope.removeMarker = function() {
            $scope.markerAdded = false;
            $scope.mapOptions.markers.pop();
        };

        $scope.useDefaultMarker = function() {
            $scope.defMarker = true;
            for (var i = 0; i < $scope.mapOptions.markers.length; i++) {
                delete $scope.mapOptions.markers[i].icon;
                delete $scope.mapOptions.markers[i].width;
                delete $scope.mapOptions.markers[i].height;
            }
        };

        $scope.useCustomMarker = function() {
            $scope.defMarker = false;
            for (var i = 0; i < $scope.mapOptions.markers.length; i++) {
                $scope.mapOptions.markers[i].icon = 'images/mappiont.png';
                $scope.mapOptions.markers[i].width = 30;
                $scope.mapOptions.markers[i].height = 45;
            }
        };

    });
}(angular));
