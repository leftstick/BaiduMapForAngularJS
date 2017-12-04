(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = nullCheck;
/* unused harmony export numberCheck */
/* harmony export (immutable) */ __webpack_exports__["c"] = isNull;
/* unused harmony export isNumber */
/* harmony export (immutable) */ __webpack_exports__["b"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = controlTypeCheck;
/* harmony export (immutable) */ __webpack_exports__["e"] = overlayTypeCheck;

function nullCheck(val, msg) {
    if (isNull(val)) {
        throw new Error(msg);
    }
}

function numberCheck(val, msg) {
    if (isNumber(val)) {
        throw new Error(msg);
    }
}

function isNull(obj) {
    return obj === null || obj === undefined;
}

function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

var CONTROL_TYPS = ['navigation', 'overviewmap', 'scale', 'maptype', 'copyright', 'geolocation', 'panorama'];
function controlTypeCheck(type) {
    if (CONTROL_TYPS.indexOf((type || '').toLowerCase()) < 0) {
        throw new Error('control type should be one of: [' + CONTROL_TYPS.join(',') + ']');
    }
}

var OVERLAY_TYPS = ['heatmap'];
function overlayTypeCheck(type) {
    if (OVERLAY_TYPS.indexOf((type || '').toLowerCase()) < 0) {
        throw new Error('overlay type should be one of: [' + OVERLAY_TYPS.join(',') + ']');
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngBaiduMap", function() { return ngBaiduMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_baiduMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_marker__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_control__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_overlay__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_mapScript__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_preset__ = __webpack_require__(13);










Object(__WEBPACK_IMPORTED_MODULE_6__helper_preset__["a" /* globalConstants */])();

var moduleName = 'baiduMap';
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module(moduleName, []).provider('mapScriptService', __WEBPACK_IMPORTED_MODULE_5__provider_mapScript__["a" /* default */]).component('baiduMap', __WEBPACK_IMPORTED_MODULE_1__components_baiduMap__["a" /* default */]).component('marker', __WEBPACK_IMPORTED_MODULE_2__components_marker__["a" /* default */]).component('control', __WEBPACK_IMPORTED_MODULE_3__components_control__["a" /* default */]).component('overlay', __WEBPACK_IMPORTED_MODULE_4__components_overlay__["a" /* default */]);

var ngBaiduMap = moduleName;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_map__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ __webpack_exports__["a"] = ({
    bindings: {
        offlineTxt: '<',
        mapOptions: '<',
        loaded: '&',
        click: '&'
    },
    transclude: true,
    template: '\n        <div ng-style="$ctrl.style.map" class="baidu-map-instance"></div>\n        <div ng-style="$ctrl.style.offline" class="baidu-map-offline">\n            <label ng-style="$ctrl.style.offlineLabel">{{ $ctrl.offlineTxt || \'NO_NETWORK\' }}</label>\n        </div>\n        <div ng-transclude style="display: none"></div>\n    ',
    controller: function () {
        /* @ngInject */
        function controller($scope, $element, $attrs, mapScriptService) {
            _classCallCheck(this, controller);

            this.$scope = $scope;
            this.$element = $element;
            this.$attrs = $attrs;
            this.style = __WEBPACK_IMPORTED_MODULE_0__style__;
            this.mapScriptService = mapScriptService;
        }

        _createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                this.mapReady = this.mapScriptService.load().then(function () {
                    return Object(__WEBPACK_IMPORTED_MODULE_1__helper_map__["a" /* create */])(_this.$element.children()[0], _this.mapOptions);
                }).then(function (map) {
                    _this.loaded({
                        map: map
                    });
                    _this.$scope.$apply();
                    //eslint-disable-next-line
                    return _this.map = map;
                }).then(function () {
                    if (!_this.$attrs.click) {
                        return;
                    }
                    var clickListener = _this.clickListener = function (e) {
                        _this.click({
                            e: e
                        });
                        _this.$scope.$apply();
                    };
                    _this.map.addEventListener('click', clickListener);
                });
            }
        }, {
            key: '$onChanges',
            value: function $onChanges(changes) {
                if (!this.map) {
                    return;
                }
                Object(__WEBPACK_IMPORTED_MODULE_1__helper_map__["b" /* refresh */])(this.map, changes.mapOptions.currentValue);
            }
        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.map.removeEventListener('click', this.clickListener);
            }
        }, {
            key: 'addOverlay',
            value: function addOverlay(marker) {
                return handleMapOperation(this.map, 'addOverlay', marker);
            }
        }, {
            key: 'removeOverlay',
            value: function removeOverlay(marker) {
                return handleMapOperation(this.map, 'removeOverlay', marker);
            }
        }, {
            key: 'addControl',
            value: function addControl(control) {
                return handleMapOperation(this.map, 'addControl', control);
            }
        }, {
            key: 'removeControl',
            value: function removeControl(control) {
                return handleMapOperation(this.map, 'removeControl', control);
            }
        }, {
            key: 'getMap',
            value: function getMap() {
                return this.map;
            }
        }]);

        return controller;
    }()
});

function handleMapOperation(map, method) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    return new Promise(function (resolve) {
        map[method].apply(map, args);
        resolve();
    });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offline", function() { return offline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offlineLabel", function() { return offlineLabel; });
var map = {
    width: '100%',
    height: '100%',
    display: 'none'
};

var offline = {
    width: '100%',
    height: '100%',
    backgroundColor: '#E6E6E6',
    position: 'relative',
    display: 'none'
};

var offlineLabel = {
    fontSize: '30px',
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    'margin-right': '-50%',
    transform: 'translate(-50%, -50%)'
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["b"] = refresh;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate__ = __webpack_require__(0);


var DEFAULT_COORDINATION = {
    longitude: 121.506191,
    latitude: 31.245554
};

var DEFAULT_ZOOM = 10;

function create(element, mapOptions) {
    var map = new BMap.Map(element, mapOptions);

    refresh(map, mapOptions);

    return map;
}

function refresh(map, mapOptions) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.disableDragging)) {
        map[(mapOptions.disableDragging ? 'disable' : 'enable') + 'Dragging']();
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.enableScrollWheelZoom)) {
        map[(mapOptions.enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']();
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.disableDoubleClickZoom)) {
        map[(mapOptions.disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']();
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.enableKeyboard)) {
        map[(mapOptions.enableKeyboard ? 'enable' : 'disable') + 'Keyboard']();
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.enableInertialDragging)) {
        map[(mapOptions.enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']();
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.enableContinuousZoom)) {
        map[(mapOptions.enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']();
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.disablePinchToZoom)) {
        map[(mapOptions.disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']();
    }
    !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.cursor) && map.setDefaultCursor(mapOptions.cursor);
    !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.draggingCursor) && map.setDraggingCursor(mapOptions.draggingCursor);
    !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.currentCity) && map.setCurrentCity(mapOptions.currentCity);
    !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions) && !Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNull */])(mapOptions.centerAndZoom) && map.centerAndZoom(new BMap.Point(mapOptions.centerAndZoom.longitude || DEFAULT_COORDINATION.longitude, mapOptions.centerAndZoom.latitude || DEFAULT_COORDINATION.latitude), mapOptions.centerAndZoom.zoom || DEFAULT_ZOOM);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_validate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_transformer__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ __webpack_exports__["a"] = ({
    bindings: {
        point: '<',
        options: '<',
        click: '&'
    },
    require: {
        mapCtrl: '^baiduMap'
    },
    template: '',
    controller: function () {
        /* @ngInject */
        function controller($scope, $attrs) {
            _classCallCheck(this, controller);

            this.$scope = $scope;
            this.$attrs = $attrs;
        }

        _createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                Object(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["d" /* nullCheck */])(this.point, 'point is required for <marker>');

                this.mapCtrl.mapReady.then(function () {
                    var point = Object(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["b" /* transformPoint */])(_this.point, '<marker> point');
                    var opts = transformOptions(_this.options);
                    var marker = _this.marker = new BMap.Marker(point, opts);
                    _this.mapCtrl.addOverlay(marker);
                    return marker;
                }).then(function (marker) {
                    if (!_this.$attrs.click) {
                        return;
                    }
                    _this.clickHandler = function (e) {
                        _this.click({
                            e: e,
                            marker: marker,
                            map: _this.mapCtrl.getMap()
                        });
                        _this.$scope.$apply();
                    };
                    marker.addEventListener('click', _this.clickHandler);
                });
            }
        }, {
            key: '$onChanges',
            value: function $onChanges(changes) {
                if (!this.marker) {
                    return;
                }
                if (changes.point && changes.point.currentValue) {
                    this.marker.setPosition(Object(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["b" /* transformPoint */])(changes.point.currentValue, '<marker> point'));
                }
            }
        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.marker.removeEventListener('click', this.clickHandler);
                this.mapCtrl.removeOverlay(this.marker);
            }
        }]);

        return controller;
    }()
});

function transformOptions(options) {
    var opts = JSON.parse(JSON.stringify(options || {}));
    if (opts.offset) {
        opts.offset = Object(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["c" /* transformSize */])(opts.offset, '<marker> options.offset');
    }
    if (opts.icon) {
        opts.icon = Object(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["a" /* transformIcon */])(opts.icon, '<marker> options.icon');
    }
    if (opts.shadow) {
        opts.shadow = Object(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["a" /* transformIcon */])(opts.shadow, '<marker> options.shadow');
    }
    return opts;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transformIcon;
/* harmony export (immutable) */ __webpack_exports__["c"] = transformSize;
/* harmony export (immutable) */ __webpack_exports__["b"] = transformPoint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate__ = __webpack_require__(0);


function transformIcon(icon, field) {
    var opts = {
        url: icon.url
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* nullCheck */])(icon.url, 'url is required in ' + field);
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* nullCheck */])(icon.size, 'size is required in ' + field);
    opts.size = transformSize(icon.size, field + '.size');
    return new BMap.Icon(opts.url, opts.size);
}

function transformSize(size, field) {
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* nullCheck */])(size.width, 'width is required in ' + field);
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* nullCheck */])(size.height, 'height is required in ' + field);
    return new BMap.Size(size.width, size.height);
}

function transformPoint(point, field) {
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* nullCheck */])(point.longitude, 'longitude is required in ' + field);
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* nullCheck */])(point.latitude, 'latitude is required in ' + field);
    return new BMap.Point(point.longitude, point.latitude);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_validate__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/* harmony default export */ __webpack_exports__["a"] = ({
    bindings: {
        type: '@',
        options: '<'
    },
    require: {
        mapCtrl: '^baiduMap'
    },
    template: '',
    controller: function () {
        /* @ngInject */
        function controller() {
            _classCallCheck(this, controller);
        }

        _createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                Object(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["a" /* controlTypeCheck */])(this.type);

                this.mapCtrl.mapReady.then(function () {
                    return createControl(_this.type.toLowerCase(), _this.options);
                }).then(function (control) {
                    _this.mapCtrl.addControl(control);
                    _this.control = control;
                    return control;
                });
            }
        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.mapCtrl.removeControl(this.control);
            }
        }]);

        return controller;
    }()
});

function createControl(type, options) {
    if (type === 'navigation') {
        return new BMap.NavigationControl(options);
    }
    if (type === 'overviewmap') {
        return new BMap.OverviewMapControl(options);
    }
    if (type === 'scale') {
        return new BMap.ScaleControl(options);
    }
    if (type === 'maptype') {
        return new BMap.MapTypeControl(options);
    }
    if (type === 'copyright') {
        var copyright = new BMap.CopyrightControl(options);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["b" /* isArray */])(options.copyrights)) {
            options.copyrights.forEach(function (r) {
                copyright.addCopyright(r);
            });
        }
        return copyright;
    }
    if (type === 'geolocation') {
        return new BMap.GeolocationControl(options);
    }
    if (type === 'panorama') {
        return new BMap.PanoramaControl(options);
    }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_validate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heatmap__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ __webpack_exports__["a"] = ({
    bindings: {
        type: '@',
        options: '<',
        dataset: '<'
    },
    require: {
        mapCtrl: '^baiduMap'
    },
    template: '',
    controller: function () {
        /* @ngInject */
        function controller() {
            _classCallCheck(this, controller);
        }

        _createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                Object(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["e" /* overlayTypeCheck */])(this.type);

                this.realType = this.type.toLowerCase();

                this.mapCtrl.mapReady.then(function () {
                    return createOverlay(_this.realType, _this.options);
                }).then(function (overlay) {
                    _this.mapCtrl.addOverlay(overlay);
                    _this.overlay = overlay;
                    setExtraData(_this.realType, _this.overlay, _this.dataset);
                    return overlay;
                });
            }
        }, {
            key: '$onChanges',
            value: function $onChanges(changes) {
                if (changes.dataset && changes.dataset.currentValue) {
                    setExtraData(this.realType, this.overlay, changes.dataset.currentValue);
                }
            }
        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.mapCtrl.removeOverlay(this.overlay);
            }
        }]);

        return controller;
    }()
});

function createOverlay(type, options) {
    if (type === 'heatmap') {
        return Object(__WEBPACK_IMPORTED_MODULE_1__heatmap__["a" /* createHeatmapOverlay */])(options);
    }
}

function setExtraData(type, overlay, data) {
    if (type === 'heatmap') {
        if (data) {
            overlay.setDataSet(data);
        }
    }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHeatmapOverlay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_heatmapScriptLoader__ = __webpack_require__(11);


function createHeatmapOverlay(options) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__helper_heatmapScriptLoader__["a" /* default */])().then(function () {
        return new BMapLib.HeatmapOverlay(options);
    });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var SCRIPT_URL = '//api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js';

/* harmony default export */ __webpack_exports__["a"] = (function () {

    var loadHeatMapPromise = window.loadHeatMapPromise;
    if (loadHeatMapPromise) {
        return loadHeatMapPromise;
    }

    //eslint-disable-next-line
    return window.loadHeatMapPromise = appendScriptTag(SCRIPT_URL);
});

function appendScriptTag(url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onerror = function () {
            document.body.removeChild(script);

            setTimeout(function () {
                appendScriptTag(url);
            }, 30000);
        };
        script.onload = resolve;
        document.body.appendChild(script);
    });
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_validate__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function () {
    var ak = null,
        MAP_URL = void 0;

    this.setKey = function (val) {
        ak = val;
        MAP_URL = '//api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=baidumapinit';

        if (location.protocol.indexOf('http') > -1) {
            MAP_URL = MAP_URL + '&s=' + (location.protocol === 'https:' ? 1 : 0);
        } else {
            MAP_URL = 'https:' + MAP_URL + '&s=1';
        }
    };

    this.$get = function ($rootScope) {
        'ngInject';

        return {
            load: function load() {
                Object(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["d" /* nullCheck */])(ak, 'ak should be set before use. Read: https://leftstick.github.io/BaiduMapForAngularJS/#!/quickstart');

                var loadBaiduMapPromise = $rootScope.loadBaiduMapPromise;
                if (loadBaiduMapPromise) {
                    return loadBaiduMapPromise.then(displayMap);
                }

                //eslint-disable-next-line
                return $rootScope.loadBaiduMapPromise = new Promise(function (resolve, reject) {
                    window.baidumapinit = resolve;
                    appendScriptTag(MAP_URL);
                }).then(displayMap);
            }
        };
    };
});

function appendScriptTag(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function () {
        Array.prototype.slice.call(document.querySelectorAll('baidu-map .baidu-map-offline')).forEach(function (node) {
            node.style.display = 'block';
        });
        document.body.removeChild(script);

        setTimeout(function () {
            appendScriptTag(url);
        }, 30000);
    };
    document.body.appendChild(script);
}

function displayMap() {
    return Array.prototype.slice.call(document.querySelectorAll('baidu-map')).forEach(function (node) {
        node.querySelector('.baidu-map-offline') && node.removeChild(node.querySelector('.baidu-map-offline'));
        node.querySelector('.baidu-map-instance').style.display = 'block';
    });
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = globalConstants;


function globalConstants() {
    //ControlAnchor
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;

    //NavigationControlType
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;

    //LengthUnit
    window.BMAP_UNIT_METRIC = 'metric';
    window.BMAP_UNIT_IMPERIAL = 'us';

    //MapTypeControlType
    window.BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0;
    window.BMAP_MAPTYPE_CONTROL_DROPDOWN = 1;
    window.BMAP_MAPTYPE_CONTROL_MAP = 2;

    //Animation
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;

    //SizeType
    window.BMAP_POINT_SIZE_TINY = 1;
    window.BMAP_POINT_SIZE_SMALLER = 2;
    window.BMAP_POINT_SIZE_SMALL = 3;
    window.BMAP_POINT_SIZE_NORMAL = 4;
    window.BMAP_POINT_SIZE_BIG = 5;
    window.BMAP_POINT_SIZE_BIGGER = 6;
    window.BMAP_POINT_SIZE_HUGE = 7;

    //PanoramaSceneType
    window.BMAP_PANORAMA_INDOOR_SCENE = 'inter';
    window.BMAP_PANORAMA_STREET_SCENE = 'street';

    //PanoramaPOIType
    window.BMAP_PANORAMA_POI_HOTEL = 'hotel';
    window.BMAP_PANORAMA_POI_CATERING = 'catering';
    window.BMAP_PANORAMA_POI_MOVIE = 'movie';
    window.BMAP_PANORAMA_POI_TRANSIT = 'transit';
    window.BMAP_PANORAMA_POI_INDOOR_SCENE = 'indoor_scene';
    window.BMAP_PANORAMA_POI_NONE = 'none';
}

/***/ })
/******/ ]);
});