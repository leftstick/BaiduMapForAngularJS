import angular from 'angular';

import baiduMap from './baiduMap';
import marker from './marker';

const moduleName = 'baiduMap';

angular
    .module(moduleName, [])
    .component('baiduMap', baiduMap)
    .component('marker', marker);

export const ngBaiduMap = moduleName;
