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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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

	var _defaults = __webpack_require__(2);

	var _validator = __webpack_require__(3);

	var _directiveDef = __webpack_require__(4);

	var _baiduScriptLoader = __webpack_require__(5);

	var _offline = __webpack_require__(6);

	var _map = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ngBaiduMap = exports.ngBaiduMap = function () {
	    var name = 'baiduMap';

	    (0, _directiveDef.def)(name, {
	        restrict: 'E',
	        scope: {
	            options: '=',
	            ak: '@',
	            offline: '=',
	            onMapLoaded: '&'
	        },
	        link: function link($scope, element, attrs) {

	            var opts = _angular2.default.extend({}, _defaults.defaultOpts, $scope.options);
	            var offlineOpts = _angular2.default.extend({}, _defaults.defaultOfflineOpts, $scope.offline);
	            $scope.offlineWords = offlineOpts.txt;
	            (0, _validator.validator)($scope.ak, 'ak must not be empty');
	            (0, _validator.validator)(opts.center, 'options.center must be set');
	            (0, _validator.validator)(opts.center.longitude, 'options.center.longitude must be set');
	            (0, _validator.validator)(opts.center.latitude, 'options.center.latitude must be set');
	            (0, _validator.validator)(opts.city, 'options.city must be set');

	            (0, _baiduScriptLoader.loader)($scope.ak, offlineOpts, function () {

	                var map = (0, _map.createInstance)(opts, element);

	                $scope.onMapLoaded({ map: map });

	                //create markers
	                var previousMarkers = [];

	                (0, _map.redrawMarkers)(map, previousMarkers, opts);

	                $scope.$watch('options.center', function (newValue, oldValue) {

	                    opts = $scope.options;
	                    map.centerAndZoom(new BMap.Point(opts.center.longitude, opts.center.latitude), opts.zoom);
	                    (0, _map.redrawMarkers)(map, previousMarkers, opts);
	                }, true);

	                $scope.$watch('options.markers', function (newValue, oldValue) {
	                    (0, _map.redrawMarkers)(map, previousMarkers, opts);
	                }, true);
	            });

	            $scope.divStyle = _offline.divStyle;
	            $scope.labelStyle = _offline.labelStyle;

	            setTimeout(function () {
	                var $label = document.querySelector('baidu-map div label');
	                $scope.labelStyle.marginTop = $label.clientHeight / -2 + 'px';
	                $scope.labelStyle.marginLeft = $label.clientWidth / -2 + 'px';
	                $scope.$apply();
	            });
	        },
	        template: '<div ng-style="divStyle"><label ng-style="labelStyle">{{ offlineWords }}</label></div>'
	    });

	    return name;
	}();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var defaultOpts = exports.defaultOpts = {
	    navCtrl: true,
	    scaleCtrl: true,
	    overviewCtrl: true,
	    enableScrollWheelZoom: true,
	    zoom: 10
	};

	var defaultOfflineOpts = exports.defaultOfflineOpts = {
	    retryInterval: 30000,
	    txt: 'OFFLINE'
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var validator = exports.validator = function validator(prop, desc) {
	    if (!prop) {
	        throw new Error(desc);
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.def = undefined;

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var def = exports.def = function def(name, ddo) {
	    _angular2.default.module(name, []).directive(name, [function () {
	        return ddo;
	    }]);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var loader = exports.loader = function loader(ak, offlineOpts, callback) {
	    var MAP_URL = '//api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=baidumapinit&s=' + (location.protocol === 'https:' ? 1 : 0);

	    var baiduMap = window.baiduMap;
	    if (baiduMap && baiduMap.status === 'loading') {
	        return baiduMap.callbacks.push(callback);
	    }

	    if (baiduMap && baiduMap.status === 'loaded') {
	        return callback();
	    }

	    window.baiduMap = { status: 'loading', callbacks: [] };
	    window.baidumapinit = function () {
	        window.baiduMap.status = 'loaded';
	        callback();
	        window.baiduMap.callbacks.forEach(function (cb) {
	            return cb();
	        });
	        window.baiduMap.callbacks = [];
	    };

	    var createTag = function createTag() {
	        var script = document.createElement('script');
	        script.type = 'text/javascript';
	        script.src = MAP_URL;
	        script.onerror = function () {

	            Array.prototype.slice.call(document.querySelectorAll('baidu-map div')).forEach(function (node) {
	                node.style.opacity = 1;
	            });
	            document.body.removeChild(script);
	            setTimeout(createTag, offlineOpts.retryInterval);
	        };
	        document.body.appendChild(script);
	    };

	    createTag();
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var divStyle = exports.divStyle = {
	    width: '100%',
	    height: '100%',
	    backgroundColor: '#E6E6E6',
	    position: 'relative',
	    opacity: 0
	};

	var labelStyle = exports.labelStyle = {
	    fontSize: '30px',
	    position: 'absolute',
	    top: '50%',
	    marginTop: 0,
	    left: '50%',
	    marginLeft: 0
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var createInstance = exports.createInstance = function createInstance(opts, element) {
	    // create map instance
	    var map = new BMap.Map(element[0]);

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
	    return map;
	};

	var createMarker = exports.createMarker = function createMarker(marker, pt) {
	    if (marker.icon) {
	        var icon = new BMap.Icon(marker.icon, new BMap.Size(marker.width, marker.height));
	        return new BMap.Marker(pt, { icon: icon });
	    }
	    return new BMap.Marker(pt);
	};

	var redrawMarkers = exports.redrawMarkers = function redrawMarkers(map, previousMarkers, opts) {

	    previousMarkers.forEach(function (_ref) {
	        var marker = _ref.marker;
	        var listener = _ref.listener;

	        marker.removeEventListener('click', listener);
	        map.removeOverlay(marker);
	    });

	    previousMarkers.length = 0;

	    if (!opts.markers) {
	        return;
	    }

	    opts.markers.forEach(function (marker) {

	        var marker2 = createMarker(marker, new BMap.Point(marker.longitude, marker.latitude));

	        // add marker to the map
	        map.addOverlay(marker2);
	        var previousMarker = { marker: marker2, listener: null };
	        previousMarkers.push(previousMarker);

	        if (!marker.title && !marker.content) {
	            return;
	        }
	        var msg = '<p>' + (marker.title || '') + '</p><p>' + (marker.content || '') + '</p>';
	        var infoWindow2 = new BMap.InfoWindow(msg, {
	            enableMessage: !!marker.enableMessage
	        });
	        previousMarker.listener = function () {
	            this.openInfoWindow(infoWindow2);
	        };
	        marker2.addEventListener('click', previousMarker.listener);
	    });
	};

/***/ }
/******/ ])
});
;