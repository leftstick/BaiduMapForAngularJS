(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var style_namespaceObject = {};
__webpack_require__.d(style_namespaceObject, "map", function() { return style_map; });
__webpack_require__.d(style_namespaceObject, "offline", function() { return offline; });
__webpack_require__.d(style_namespaceObject, "offlineLabel", function() { return offlineLabel; });

// EXTERNAL MODULE: external "angular"
var external_angular_ = __webpack_require__(0);
var external_angular_default = /*#__PURE__*/__webpack_require__.n(external_angular_);

// CONCATENATED MODULE: ./src/style/index.js
var style_map = {
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
// CONCATENATED MODULE: ./src/helper/validate.js
function nullCheck(val, msg) {
  if (isNull(val)) {
    throw new Error(msg);
  }
}

function arrayCheck(val, msg) {
  if (!isArray(val)) {
    throw new Error(msg);
  }
}

function isNull(obj) {
  return obj === null || obj === undefined;
}

function isUndefined(obj) {
  return obj === undefined;
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
// CONCATENATED MODULE: ./src/helper/map.js


var map_DEFAULT_COORDINATION = {
    longitude: 121.506191,
    latitude: 31.245554
};

var map_DEFAULT_ZOOM = 10;

function map_create(element, mapOptions) {
    var map = new BMap.Map(element, mapOptions);

    map_refresh(map, mapOptions);

    return map;
}

function map_refresh(map, mapOptions) {
    if (!isNull(mapOptions) && !isNull(mapOptions.disableDragging)) {
        map[(mapOptions.disableDragging ? 'disable' : 'enable') + 'Dragging']();
    }
    if (!isNull(mapOptions) && !isNull(mapOptions.enableScrollWheelZoom)) {
        map[(mapOptions.enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']();
    }
    if (!isNull(mapOptions) && !isNull(mapOptions.disableDoubleClickZoom)) {
        map[(mapOptions.disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']();
    }
    if (!isNull(mapOptions) && !isNull(mapOptions.enableKeyboard)) {
        map[(mapOptions.enableKeyboard ? 'enable' : 'disable') + 'Keyboard']();
    }
    if (!isNull(mapOptions) && !isNull(mapOptions.enableInertialDragging)) {
        map[(mapOptions.enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']();
    }
    if (!isNull(mapOptions) && !isNull(mapOptions.enableContinuousZoom)) {
        map[(mapOptions.enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']();
    }
    if (!isNull(mapOptions) && !isNull(mapOptions.disablePinchToZoom)) {
        map[(mapOptions.disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']();
    }
    !isNull(mapOptions) && !isNull(mapOptions.cursor) && map.setDefaultCursor(mapOptions.cursor);
    !isNull(mapOptions) && !isNull(mapOptions.draggingCursor) && map.setDraggingCursor(mapOptions.draggingCursor);
    !isNull(mapOptions) && !isNull(mapOptions.currentCity) && map.setCurrentCity(mapOptions.currentCity);
    !isNull(mapOptions) && !isNull(mapOptions.centerAndZoom) && map.centerAndZoom(new BMap.Point(mapOptions.centerAndZoom.longitude || map_DEFAULT_COORDINATION.longitude, mapOptions.centerAndZoom.latitude || map_DEFAULT_COORDINATION.latitude), mapOptions.centerAndZoom.zoom || map_DEFAULT_ZOOM);
}
// CONCATENATED MODULE: ./src/components/baiduMap.js
var baiduMap_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function baiduMap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ var baiduMap = ({
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
      baiduMap_classCallCheck(this, controller);

      this.$scope = $scope;
      this.$element = $element;
      this.$attrs = $attrs;
      this.style = style_namespaceObject;
      this.mapScriptService = mapScriptService;
    }

    baiduMap_createClass(controller, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.mapReady = this.mapScriptService.load().then(function () {
          return map_create(_this.$element.children()[0], _this.mapOptions);
        }).then(function (map) {
          _this.loaded({
            map: map
          });
          _this.$scope.$apply();
          // eslint-disable-next-line
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
        map_refresh(this.map, changes.mapOptions.currentValue);
      }
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {
        this.map.removeEventListener('click', this.clickListener);
      }
    }, {
      key: 'addOverlay',
      value: function addOverlay(marker) {
        return baiduMap_handleMapOperation(this.map, 'addOverlay', marker);
      }
    }, {
      key: 'removeOverlay',
      value: function removeOverlay(marker) {
        return baiduMap_handleMapOperation(this.map, 'removeOverlay', marker);
      }
    }, {
      key: 'addControl',
      value: function addControl(control) {
        return baiduMap_handleMapOperation(this.map, 'addControl', control);
      }
    }, {
      key: 'removeControl',
      value: function removeControl(control) {
        return baiduMap_handleMapOperation(this.map, 'removeControl', control);
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

function baiduMap_handleMapOperation(map, method) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return new Promise(function (resolve) {
    map[method].apply(map, args);
    resolve();
  });
}
// CONCATENATED MODULE: ./src/helper/transformer.js


function transformer_transformIcon(icon, field) {
  var opts = {
    url: icon.url
  };
  nullCheck(icon.url, 'url is required in ' + field);
  nullCheck(icon.size, 'size is required in ' + field);
  opts.size = transformer_transformSize(icon.size, field + '.size');
  return new BMap.Icon(opts.url, opts.size);
}

function transformer_transformSize(size, field) {
  nullCheck(size.width, 'width is required in ' + field);
  nullCheck(size.height, 'height is required in ' + field);
  return new BMap.Size(size.width, size.height);
}

function transformer_transformPoint(point, field) {
  nullCheck(point.longitude, 'longitude is required in ' + field);
  nullCheck(point.latitude, 'latitude is required in ' + field);
  return new BMap.Point(point.longitude, point.latitude);
}

function transformer_transformPoints(points, field) {
  arrayCheck(points, field + ' must be Array');
  return points.map(function (point) {
    nullCheck(point.longitude, 'longitude is required in ' + field);
    nullCheck(point.latitude, 'latitude is required in ' + field);
    return new BMap.Point(point.longitude, point.latitude);
  });
}
// CONCATENATED MODULE: ./src/components/marker.js
var marker_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function marker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ var components_marker = ({
  bindings: {
    point: '<',
    options: '<',
    loaded: '&',
    click: '&'
  },
  require: {
    mapCtrl: '^baiduMap'
  },
  template: '',
  controller: function () {
    /* @ngInject */
    function controller($scope, $attrs) {
      marker_classCallCheck(this, controller);

      this.$scope = $scope;
      this.$attrs = $attrs;
    }

    marker_createClass(controller, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        nullCheck(this.point, 'point is required for <marker>');

        this.mapCtrl.mapReady.then(function () {
          var point = transformer_transformPoint(_this.point, '<marker> point');
          var opts = marker_transformOptions(_this.options);
          var marker = _this.marker = new BMap.Marker(point, opts);
          _this.mapCtrl.addOverlay(marker);
          return marker;
        }).then(function (marker) {
          _this.loaded({
            marker: marker
          });
          _this.$scope.$apply();

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
          this.marker.setPosition(transformer_transformPoint(changes.point.currentValue, '<marker> point'));
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

function marker_transformOptions(options) {
  var opts = JSON.parse(JSON.stringify(options || {}));
  if (opts.offset) {
    opts.offset = transformer_transformSize(opts.offset, '<marker> options.offset');
  }
  if (opts.icon) {
    opts.icon = transformer_transformIcon(opts.icon, '<marker> options.icon');
  }
  if (opts.shadow) {
    opts.shadow = transformer_transformIcon(opts.shadow, '<marker> options.shadow');
  }
  return opts;
}
// CONCATENATED MODULE: ./src/components/polyline.js
var polyline_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function polyline_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ var components_polyline = ({
  bindings: {
    points: '<',
    options: '<',
    loaded: '&'
  },
  require: {
    mapCtrl: '^baiduMap'
  },
  template: '',
  controller: function () {
    /* @ngInject */
    function controller($scope, $attrs) {
      polyline_classCallCheck(this, controller);

      this.$scope = $scope;
      this.$attrs = $attrs;
    }

    polyline_createClass(controller, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        nullCheck(this.points, 'points is required for <polyline>');

        this.mapCtrl.mapReady.then(function () {
          var points = transformer_transformPoints(_this.points, '<polyline> points');
          var opts = _this.options;
          var polyline = _this.polyline = new BMap.Polyline(points, opts);
          _this.mapCtrl.addOverlay(polyline);
          return polyline;
        }).then(function (polyline) {
          _this.loaded({
            polyline: polyline
          });
          _this.$scope.$apply();
        });
      }
    }, {
      key: '$onChanges',
      value: function $onChanges(changes) {
        if (!this.polyline) {
          return;
        }
        if (changes.points && changes.points.currentValue) {
          this.polyline.setPath(transformer_transformPoints(changes.points.currentValue, '<polyline> points'));
        }
        if (!changes.options || !changes.options.currentValue) {
          return;
        }
        if (!isUndefined(changes.options.currentValue.strokeColor)) {
          this.polyline.setStrokeColor(changes.options.currentValue.strokeColor);
        }
        if (!isUndefined(changes.options.currentValue.strokeWeight)) {
          this.polyline.setStrokeWeight(changes.options.currentValue.strokeWeight);
        }
        if (!isUndefined(changes.options.currentValue.strokeOpacity)) {
          this.polyline.setStrokeOpacity(changes.options.currentValue.strokeOpacity);
        }
        if (!isUndefined(changes.options.currentValue.strokeStyle)) {
          this.polyline.setStrokeStyle(changes.options.currentValue.strokeStyle);
        }

        if (!isUndefined(changes.options.currentValue.enableMassClear)) {
          this.polyline[changes.options.currentValue.enableMassClear ? 'enableMassClear' : 'disableMassClear']();
        }
        if (!isUndefined(changes.options.currentValue.enableEditing)) {
          this.polyline[changes.options.currentValue.enableEditing ? 'enableEditing' : 'disableEditing']();
        }
      }
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {
        this.mapCtrl.removeOverlay(this.polyline);
      }
    }]);

    return controller;
  }()
});
// CONCATENATED MODULE: ./src/components/circle.js
var circle_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function circle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ var components_circle = ({
  bindings: {
    center: '<',
    radius: '<',
    options: '<',
    loaded: '&'
  },
  require: {
    mapCtrl: '^baiduMap'
  },
  template: '',
  controller: function () {
    /* @ngInject */
    function controller($scope, $attrs) {
      circle_classCallCheck(this, controller);

      this.$scope = $scope;
      this.$attrs = $attrs;
    }

    circle_createClass(controller, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'radius is required for <circle>');

        this.mapCtrl.mapReady.then(function () {
          var center = _this.center,
              radius = _this.radius,
              options = _this.options;

          var point = transformer_transformPoint(center, '<circle> center');
          var circle = _this.circle = new BMap.Circle(point, radius, options);
          _this.mapCtrl.addOverlay(circle);
          return circle;
        }).then(function (circle) {
          _this.loaded({
            circle: circle
          });
          _this.$scope.$apply();
        });
      }
    }, {
      key: '$onChanges',
      value: function $onChanges(changes) {
        if (!this.circle) {
          return;
        }
        if (changes.center && changes.center.currentValue) {
          this.circle.setCenter(transformer_transformPoint(changes.center.currentValue, '<circle> center'));
        }
        if (changes.radius && changes.radius.currentValue) {
          this.circle.setRadius(changes.radius.currentValue);
        }
        if (!changes.options || !changes.options.currentValue) {
          return;
        }

        if (!isUndefined(changes.options.currentValue.strokeColor)) {
          this.circle.setStrokeColor(changes.options.currentValue.strokeColor);
        }
        if (!isUndefined(changes.options.currentValue.strokeWeight)) {
          this.circle.setStrokeWeight(changes.options.currentValue.strokeWeight);
        }
        if (!isUndefined(changes.options.currentValue.strokeOpacity)) {
          this.circle.setStrokeOpacity(changes.options.currentValue.strokeOpacity);
        }
        if (!isUndefined(changes.options.currentValue.strokeStyle)) {
          this.circle.setStrokeStyle(changes.options.currentValue.strokeStyle);
        }
        if (!isUndefined(changes.options.currentValue.fillOpacity)) {
          this.circle.setFillOpacity(changes.options.currentValue.fillOpacity);
        }
        if (!isUndefined(changes.options.currentValue.fillColor)) {
          this.circle.setFillColor(changes.options.currentValue.fillColor);
        }

        if (!isUndefined(changes.options.currentValue.enableMassClear)) {
          this.circle[changes.options.currentValue.enableMassClear ? 'enableMassClear' : 'disableMassClear']();
        }

        if (!isUndefined(changes.options.currentValue.enableEditing)) {
          this.circle[changes.options.currentValue.enableEditing ? 'enableEditing' : 'disableEditing']();
        }
      }
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {
        this.mapCtrl.removeOverlay(this.circle);
      }
    }]);

    return controller;
  }()
});
// CONCATENATED MODULE: ./src/components/polygon.js
var polygon_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function polygon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ var components_polygon = ({
  bindings: {
    points: '<',
    options: '<',
    loaded: '&'
  },
  require: {
    mapCtrl: '^baiduMap'
  },
  template: '',
  controller: function () {
    /* @ngInject */
    function controller($scope, $attrs) {
      polygon_classCallCheck(this, controller);

      this.$scope = $scope;
      this.$attrs = $attrs;
    }

    polygon_createClass(controller, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        nullCheck(this.points, 'points is required for <polygon>');

        this.mapCtrl.mapReady.then(function () {
          var points = transformer_transformPoints(_this.points, '<polygon> points');
          var opts = _this.options;
          var polygon = _this.polygon = new BMap.Polygon(points, opts);
          _this.mapCtrl.addOverlay(polygon);
          return polygon;
        }).then(function (polygon) {
          _this.loaded({
            polygon: polygon
          });
          _this.$scope.$apply();
        });
      }
    }, {
      key: '$onChanges',
      value: function $onChanges(changes) {
        if (!this.polygon) {
          return;
        }
        if (changes.points && changes.points.currentValue) {
          this.polygon.setPath(transformer_transformPoints(changes.points.currentValue, '<polygon> points'));
        }
        if (!changes.options || !changes.options.currentValue) {
          return;
        }
        if (!isUndefined(changes.options.currentValue.strokeColor)) {
          this.polygon.setStrokeColor(changes.options.currentValue.strokeColor);
        }
        if (!isUndefined(changes.options.currentValue.fillColor)) {
          this.polygon.setFillColor(changes.options.currentValue.fillColor);
        }
        if (!isUndefined(changes.options.currentValue.strokeWeight)) {
          this.polygon.setStrokeWeight(changes.options.currentValue.strokeWeight);
        }
        if (!isUndefined(changes.options.currentValue.strokeOpacity)) {
          this.polygon.setStrokeOpacity(changes.options.currentValue.strokeOpacity);
        }
        if (!isUndefined(changes.options.currentValue.fillOpacity)) {
          this.polygon.setFillOpacity(changes.options.currentValue.fillOpacity);
        }
        if (!isUndefined(changes.options.currentValue.strokeStyle)) {
          this.polygon.setStrokeStyle(changes.options.currentValue.strokeStyle);
        }

        if (!isUndefined(changes.options.currentValue.enableMassClear)) {
          this.polygon[changes.options.currentValue.enableMassClear ? 'enableMassClear' : 'disableMassClear']();
        }
        if (!isUndefined(changes.options.currentValue.enableEditing)) {
          this.polygon[changes.options.currentValue.enableEditing ? 'enableEditing' : 'disableEditing']();
        }
      }
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {
        this.mapCtrl.removeOverlay(this.polygon);
      }
    }]);

    return controller;
  }()
});
// CONCATENATED MODULE: ./src/helper/heatmapScriptLoader.js
var SCRIPT_URL = '//api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js';

/* harmony default export */ var heatmapScriptLoader = (function () {
  var loadHeatMapPromise = window.loadHeatMapPromise;
  if (loadHeatMapPromise) {
    return loadHeatMapPromise;
  }

  // eslint-disable-next-line
  return window.loadHeatMapPromise = heatmapScriptLoader_appendScriptTag(SCRIPT_URL);
});

function heatmapScriptLoader_appendScriptTag(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function () {
      document.body.removeChild(script);

      setTimeout(function () {
        heatmapScriptLoader_appendScriptTag(url);
      }, 30000);
    };
    script.onload = resolve;
    document.body.appendChild(script);
  });
}
// CONCATENATED MODULE: ./src/components/heatmap.js
var heatmap_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function heatmap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/* harmony default export */ var heatmap = ({
  bindings: {
    dataset: '<',
    options: '<',
    loaded: '&'
  },
  require: {
    mapCtrl: '^baiduMap'
  },
  template: '',
  controller: function () {
    /* @ngInject */
    function controller($scope, $attrs) {
      heatmap_classCallCheck(this, controller);

      this.$scope = $scope;
      this.$attrs = $attrs;
    }

    heatmap_createClass(controller, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.mapCtrl.mapReady.then(function () {
          return heatmapScriptLoader();
        }).then(function () {
          var heatmap = _this.heatmap = new BMapLib.HeatmapOverlay(_this.options);
          _this.mapCtrl.addOverlay(heatmap);
          return heatmap;
        }).then(function (heatmap) {
          _this.loaded({
            heatmap: heatmap
          });
          _this.$scope.$apply();
          if (_this.dataset) {
            heatmap.setDataSet(_this.dataset);
          }
        });
      }
    }, {
      key: '$onChanges',
      value: function $onChanges(changes) {
        if (!this.heatmap) {
          return;
        }
        if (changes.options && changes.options.currentValue) {
          this.heatmap.setOptions(changes.options.currentValue);
        }
        if (changes.dataset && changes.dataset.currentValue) {
          this.heatmap.setDataSet(changes.dataset.currentValue);
        }
      }
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {
        this.mapCtrl.removeOverlay(this.heatmap);
      }
    }]);

    return controller;
  }()
});
// CONCATENATED MODULE: ./src/components/control.js
var control_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function control_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/* harmony default export */ var control = ({
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
            control_classCallCheck(this, controller);
        }

        control_createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                controlTypeCheck(this.type);

                this.mapCtrl.mapReady.then(function () {
                    return control_createControl(_this.type.toLowerCase(), _this.options);
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

function control_createControl(type, options) {
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
        if (isArray(options.copyrights)) {
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
// CONCATENATED MODULE: ./src/components/heatmap/index.js


function heatmap_createHeatmapOverlay(options) {
  return heatmapScriptLoader().then(function () {
    return new BMapLib.HeatmapOverlay(options);
  });
}
// CONCATENATED MODULE: ./src/components/overlay.js
var overlay_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function overlay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ var overlay = ({
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
    function controller() {
      overlay_classCallCheck(this, controller);
    }

    overlay_createClass(controller, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        overlayTypeCheck(this.type);

        this.realType = this.type.toLowerCase();

        this.mapCtrl.mapReady.then(function () {
          return overlay_createOverlay(_this.realType, _this.options);
        }).then(function (overlay) {
          _this.mapCtrl.addOverlay(overlay);
          _this.overlay = overlay;
          overlay_setExtraData(_this.realType, _this.overlay, _this.dataset);
          return overlay;
        });
      }
    }, {
      key: '$onChanges',
      value: function $onChanges(changes) {
        if (changes.dataset && changes.dataset.currentValue) {
          overlay_setExtraData(this.realType, this.overlay, changes.dataset.currentValue);
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

function overlay_createOverlay(type, options) {
  if (type === 'heatmap') {
    console.warn('heatmap type is deprecated, please try with new <heatmap /> component, see: https://leftstick.github.io/BaiduMapForAngularJS/#!/apidoc?api=heatmap');
    return heatmap_createHeatmapOverlay(options);
  }
}

function overlay_setExtraData(type, overlay, data) {
  if (type === 'heatmap') {
    if (data) {
      overlay.setDataSet(data);
    }
  }
}
// CONCATENATED MODULE: ./src/provider/mapScript.js


/* harmony default export */ var mapScript = (function () {
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
                nullCheck(ak, 'ak should be set before use. Read: https://leftstick.github.io/BaiduMapForAngularJS/#!/quickstart');

                var loadBaiduMapPromise = $rootScope.loadBaiduMapPromise;
                if (loadBaiduMapPromise) {
                    return loadBaiduMapPromise.then(mapScript_displayMap);
                }

                //eslint-disable-next-line
                return $rootScope.loadBaiduMapPromise = new Promise(function (resolve, reject) {
                    window.baidumapinit = resolve;
                    mapScript_appendScriptTag(MAP_URL);
                }).then(mapScript_displayMap);
            }
        };
    };
});

function mapScript_appendScriptTag(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function () {
        Array.prototype.slice.call(document.querySelectorAll('baidu-map .baidu-map-offline')).forEach(function (node) {
            node.style.display = 'block';
        });
        document.body.removeChild(script);

        setTimeout(function () {
            mapScript_appendScriptTag(url);
        }, 30000);
    };
    document.body.appendChild(script);
}

function mapScript_displayMap() {
    return Array.prototype.slice.call(document.querySelectorAll('baidu-map')).forEach(function (node) {
        node.querySelector('.baidu-map-offline') && node.removeChild(node.querySelector('.baidu-map-offline'));
        node.querySelector('.baidu-map-instance').style.display = 'block';
    });
}
// CONCATENATED MODULE: ./src/helper/preset.js


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
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngBaiduMap", function() { return src_ngBaiduMap; });














globalConstants();

var src_moduleName = 'baiduMap';
external_angular_default.a.module(src_moduleName, []).provider('mapScriptService', mapScript).component('baiduMap', baiduMap).component('marker', components_marker).component('polyline', components_polyline).component('circle', components_circle).component('polygon', components_polygon).component('heatmap', heatmap).component('control', control).component('overlay', overlay);

var src_ngBaiduMap = src_moduleName;

/***/ })
/******/ ]);
});