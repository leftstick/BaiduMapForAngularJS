## Installation

**via npm**

```shell
npm install angular-baidu-map --save
```

## Import

**ES2015**

```javascript
import {ngBaiduMap} from 'angular-baidu-map';
```

**CommonJS**

```javascript
var ngBaiduMap = require('angular-baidu-map').ngBaiduMap;
```

**script**

```html
<script type="text/javascript" src="angular/angular.min.js"></script>
<script type="text/javascript" src="angular-baidu-map/dist/angular-baidu-map.js"></script>
<script type="text/javascript">
    var ngBaiduMap = window.ngBaiduMap;
</script>
```

## Usage ##

```JavaScript
var app = angular.module('app', [ngBaiduMap]);
```

### Use `baidu-map` directive in the template

```html
<baidu-map options="mapOptions" ak="<your-ak>" offline="offlineOpts" on-map-loaded="loadMap(map)" class="<style-for-it>"></baidu-map>
```
* `mapOptions` is what you defined in the controller
* `ak` is a plain text you applied at [开放平台](http://lbsyun.baidu.com/apiconsole/key)
* `offlineOpts` is used to control offline retry interval
* `on-map-loaded` is used for hacking purpose, in case some of you insist getting `map` instance
* `class` or `style` has to be defined, otherwise the map cannot be shown

### Define `mapOptions` in controller

```JavaScript
app.controller('demoCtrl', ['$scope',
    function($scope) {

        $scope.offlineOpts = {
            retryInterval: 10000,
            txt: 'Offline Mode'
        };

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

        $scope.loadMap = function(map) {
            console.log(map);//gets called while map instance created
        };
    }
]);
```

### Description of options

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


### Description of offline

| Attribute        | Type           | Required  | Description | Example  |
| :------------- |:-------------| :-----:| :-----| :-----|
| offline.retryInterval | number | No | retry interval while no network available. 30000ms by default | 5000 |
| offline.txt | string | No | hint words while offline mode, 'OFFLINE' by default | OFFLINE MODE |
