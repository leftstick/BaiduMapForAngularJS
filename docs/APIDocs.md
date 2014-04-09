## Basic Usage

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
            width: 500,
            height: 400,
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
| options.width | number | Yes | The width of the map | 600 |
| options.height | number | Yes | The height of the map | 600 |
| options.navCtrl | boolean | No | Whether to add a NavigationControl to the map, default to true | false |
| options.scaleCtrl | boolean | No | Whether to add a ScaleControl to the map, default to true | false |
| options.overviewCtrl | boolean | No | Whether to add a OverviewMapControl to the map, default to true | false |
| options.enableScrollWheelZoom | boolean | No | Whether to enableScrollWheelZoom to the map, default to true | false
| options.markers | array | no | The markers you'd like to have on the displayed map | [{longitude: longitude,latitude: latitude,icon: 'img/mappiont.png',width: 49,height: 60,title: 'Where',content: 'Put description here'}] |
