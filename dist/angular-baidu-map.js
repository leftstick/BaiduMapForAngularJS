(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ngBaiduMap = undefined;
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _baiduMap = __webpack_require__(2);
	
	var _baiduMap2 = _interopRequireDefault(_baiduMap);
	
	var _marker = __webpack_require__(6);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _control = __webpack_require__(8);
	
	var _control2 = _interopRequireDefault(_control);
	
	var _mapScript = __webpack_require__(9);
	
	var _mapScript2 = _interopRequireDefault(_mapScript);
	
	var _preset = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _preset.globalConstants)();
	
	var moduleName = 'baiduMap';
	_angular2.default.module(moduleName, []).provider('mapScriptService', _mapScript2.default).component('baiduMap', _baiduMap2.default).component('marker', _marker2.default).component('control', _control2.default);
	
	var ngBaiduMap = exports.ngBaiduMap = moduleName;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _style = __webpack_require__(3);
	
	var style = _interopRequireWildcard(_style);
	
	var _map = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	exports.default = {
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
	        controller.$inject = ["$scope", "$element", "$attrs", "mapScriptService"];
	        function controller($scope, $element, $attrs, mapScriptService) {
	            _classCallCheck(this, controller);
	
	            this.$scope = $scope;
	            this.$element = $element;
	            this.$attrs = $attrs;
	            this.style = style;
	            this.mapScriptService = mapScriptService;
	        }
	
	        _createClass(controller, [{
	            key: '$onInit',
	            value: function $onInit() {
	                var _this = this;
	
	                this.mapReady = this.mapScriptService.load().then(function () {
	                    return (0, _map.create)(_this.$element.children()[0], _this.mapOptions);
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
	                (0, _map.refresh)(this.map, changes.mapOptions.currentValue);
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
	};
	
	
	function handleMapOperation(map, method) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	    }
	
	    return new Promise(function (resolve) {
	        map[method].apply(map, args);
	        resolve();
	    });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var map = exports.map = {
	    width: '100%',
	    height: '100%',
	    display: 'none'
	};
	
	var offline = exports.offline = {
	    width: '100%',
	    height: '100%',
	    backgroundColor: '#E6E6E6',
	    position: 'relative',
	    display: 'none'
	};
	
	var offlineLabel = exports.offlineLabel = {
	    fontSize: '30px',
	    margin: 0,
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    'margin-right': '-50%',
	    transform: 'translate(-50%, -50%)'
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.create = create;
	exports.refresh = refresh;
	
	var _validate = __webpack_require__(5);
	
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
	    if (!(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.disableDragging)) {
	        map[(mapOptions.disableDragging ? 'disable' : 'enable') + 'Dragging']();
	    }
	    if (!(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.enableScrollWheelZoom)) {
	        map[(mapOptions.enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']();
	    }
	    if (!(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.disableDoubleClickZoom)) {
	        map[(mapOptions.disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']();
	    }
	    if (!(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.enableKeyboard)) {
	        map[(mapOptions.enableKeyboard ? 'enable' : 'disable') + 'Keyboard']();
	    }
	    if (!(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.enableInertialDragging)) {
	        map[(mapOptions.enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']();
	    }
	    if (!(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.enableContinuousZoom)) {
	        map[(mapOptions.enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']();
	    }
	    if (!(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.disablePinchToZoom)) {
	        map[(mapOptions.disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']();
	    }
	    !(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.cursor) && map.setDefaultCursor(mapOptions.cursor);
	    !(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.draggingCursor) && map.setDraggingCursor(mapOptions.draggingCursor);
	    !(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.currentCity) && map.setCurrentCity(mapOptions.currentCity);
	    !(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.centerAndZoom) && map.centerAndZoom(new BMap.Point(mapOptions.centerAndZoom.longitude || DEFAULT_COORDINATION.longitude, mapOptions.centerAndZoom.latitude || DEFAULT_COORDINATION.latitude), mapOptions.centerAndZoom.zoom || DEFAULT_ZOOM);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.nullCheck = nullCheck;
	exports.numberCheck = numberCheck;
	exports.isNull = isNull;
	exports.isNumber = isNumber;
	exports.isArray = isArray;
	exports.controlTypeCheck = controlTypeCheck;
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
	        throw new Error('control type should be one of: [\'navigation\', \'overviewmap\', \'scale\', \'maptype\', \'copyright\', \'geolocation\']');
	    }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _validate = __webpack_require__(5);
	
	var _transformer = __webpack_require__(7);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	exports.default = {
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
	        controller.$inject = ["$scope", "$attrs"];
	        function controller($scope, $attrs) {
	            _classCallCheck(this, controller);
	
	            this.$scope = $scope;
	            this.$attrs = $attrs;
	        }
	
	        _createClass(controller, [{
	            key: '$onInit',
	            value: function $onInit() {
	                var _this = this;
	
	                (0, _validate.nullCheck)(this.point, 'point is required for <marker>');
	
	                this.mapCtrl.mapReady.then(function () {
	                    var point = (0, _transformer.transformPoint)(_this.point, '<marker> point');
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
	            key: '$onDestroy',
	            value: function $onDestroy() {
	                this.marker.removeEventListener('click', this.clickHandler);
	                this.mapCtrl.removeOverlay(this.marker);
	            }
	        }]);
	
	        return controller;
	    }()
	};
	
	
	function transformOptions(options) {
	    var opts = JSON.parse(JSON.stringify(options || {}));
	    if (opts.offset) {
	        opts.offset = (0, _transformer.transformSize)(opts.offset, '<marker> options.offset');
	    }
	    if (opts.icon) {
	        opts.icon = (0, _transformer.transformIcon)(opts.icon, '<marker> options.icon');
	    }
	    if (opts.shadow) {
	        opts.shadow = (0, _transformer.transformIcon)(opts.shadow, '<marker> options.shadow');
	    }
	    return opts;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.transformIcon = transformIcon;
	exports.transformSize = transformSize;
	exports.transformPoint = transformPoint;
	
	var _validate = __webpack_require__(5);
	
	function transformIcon(icon, field) {
	    var opts = {
	        url: icon.url
	    };
	    (0, _validate.nullCheck)(icon.url, 'url is required in ' + field);
	    (0, _validate.nullCheck)(icon.size, 'size is required in ' + field);
	    opts.size = transformSize(icon.size, field + '.size');
	    return new BMap.Icon(opts.url, opts.size);
	}
	
	function transformSize(size, field) {
	    (0, _validate.nullCheck)(size.width, 'width is required in ' + field);
	    (0, _validate.nullCheck)(size.height, 'height is required in ' + field);
	    return new BMap.Size(size.width, size.height);
	}
	
	function transformPoint(point, field) {
	    (0, _validate.nullCheck)(point.longitude, 'longitude is required in ' + field);
	    (0, _validate.nullCheck)(point.latitude, 'latitude is required in ' + field);
	    return new BMap.Point(point.longitude, point.latitude);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _validate = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	exports.default = {
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
	
	                (0, _validate.controlTypeCheck)(this.type);
	
	                this.mapCtrl.mapReady.then(function () {
	                    var control = _this.control = createControl(_this.type.toLowerCase(), _this.options);
	                    _this.mapCtrl.addControl(control);
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
	};
	
	
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
	        var _ret = function () {
	            var copyright = new BMap.CopyrightControl(options);
	            if ((0, _validate.isArray)(options.copyrights)) {
	                options.copyrights.forEach(function (r) {
	                    copyright.addCopyright(r);
	                });
	            }
	            return {
	                v: copyright
	            };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	    if (type === 'geolocation') {
	        return new BMap.GeolocationControl(options);
	    }
	    if (type === 'panorama') {
	        return new BMap.PanoramaControl(options);
	    }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    var ak = null,
	        MAP_URL = void 0;
	
	    this.setKey = function (val) {
	        ak = val;
	        MAP_URL = '//api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=baidumapinit&s=' + (location.protocol === 'https:' ? 1 : 0);
	    };
	
	    this.$get = ["$rootScope", function ($rootScope) {
	        'ngInject';
	
	        return {
	            load: function load() {
	
	                (0, _validate.nullCheck)(ak, 'ak should be set before use. Read: https://leftstick.github.io/BaiduMapForAngularJS/#!/quickstart');
	
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
	    }];
	};
	
	var _validate = __webpack_require__(5);
	
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.globalConstants = globalConstants;
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

/***/ }
/******/ ])
});
;