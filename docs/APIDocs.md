## Basic Usage


### Download the source code or install the git package by using [bower](http://bower.io/)

Latest stable version: v1.2.1

#### Using bower

```shell
bower install angular-baidu-map -S
```
> `-S` means update the `bower.json` with `angular-baidu-map` involved while installing.

#### Using npm

```shell
npm install angular-baidu-map --save
```

### Add `script` tag to the `index.html` for retrieving baidu-map API

``` html
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak={ak}"></script>
```
> The ak should be applied on [Apply ak](http://lbsyun.baidu.com/apiconsole/key?application=key).

### Include `baiduMap.js` file in your page. Then add the `baiduMap` module to your Angular App file, e.g.

```JavaScript
var app = angular.module('app', ["baiduMap"]);
```

### Use `baiduMap` directive in the html

```html
<baidu-map options="mapOptions"></baidu-map>
```
> `mapOptions` is what you defined in the controller.

### Define `mapOptions` in controller

```JavaScript
app.controller('demoCtrl', ['$scope',
    function($scope) {
        var longitude = 121.506191;
        var latitude = 31.245554;
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            city: 'ShangHai',
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'img/mappiont.png',
                width: 49,
                height: 60,
                title: 'Where',
                content: 'Put description here'
            }]
        };
    }
]);
```

### Description of attributes

| Attribute        | Type           | Required  | Description | Example  |
| :------------- |:-------------| :-----:| :-----| :-----|
| options.center.longitude | number | Yes | The longitude of the center point | 121.506191 |
| options.center.latitude | number | Yes | The latitude of the center point | 31.245554 |
| options.zoom | number | Yes | Map's zoom level. This must be a number between 3 and 19 | 9 |
| options.city | string | Yes | The city name which you want to display on the map | 'ShangHai' |
| options.navCtrl | boolean | No | Whether to add a NavigationControl to the map, default to true | false |
| options.scaleCtrl | boolean | No | Whether to add a ScaleControl to the map, default to true | false |
| options.overviewCtrl | boolean | No | Whether to add a OverviewMapControl to the map, default to true | false |
| options.enableScrollWheelZoom | boolean | No | Whether to enableScrollWheelZoom to the map, default to true | false
| options.markers | array | no | The markers you'd like to have on the displayed map | [{longitude: longitude,latitude: latitude,icon: 'img/mappiont.png',width: 49,height: 60,title: 'Where',content: 'Put description here'}] |
| marker.longitude | number | Yes | The longitude of the the markder | 121.506191 |
| marker.latitude | number | Yes | The latitude of the the markder | 31.245554 |
| marker.icon | string | No | The icon's url for the marker. The default icon will be set if you haven't set this value. | 'img/mappiont.png' |
| marker.width | number | No | The icon's width for the icon. you have to set this value if `icon` is set. | 40 |
| marker.height | number | Yes | The icon's height for the icon. you have to set this value if `icon` is set. | 60 |
| marker.title | string | No | The title on the infowindow displayed once you click the marker. | 'hello' |
| marker.content | string | No | The content on the infowindow displayed once you click the marker. | 'hello world' |
| marker.enableMessage | boolean | No | Whether to enable the SMS feature for this marker window. This option only available when title/content are defined. Default false | true |
