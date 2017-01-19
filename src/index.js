import angular from 'angular';

import baiduMap from './components/baiduMap';
import marker from './components/marker';
import control from './components/control';
import mapScriptProvider from './provider/mapScript';

import {globalConstants} from './helper/preset';

globalConstants();

const moduleName = 'baiduMap';
angular
    .module(moduleName, [])
    .provider('mapScriptService', mapScriptProvider)
    .component('baiduMap', baiduMap)
    .component('marker', marker)
    .component('control', control);

export const ngBaiduMap = moduleName;
