import { nullCheck, isUndefined } from '../helper/validate'
import { transformPoints } from '../helper/transformer'

export default {
  bindings: {
    points: '<',
    options: '<',
    loaded: '&'
  },
  require: {
    mapCtrl: '^baiduMap'
  },
  template: '',
  controller: class {
    /* @ngInject */
    constructor($scope, $attrs) {
      this.$scope = $scope
      this.$attrs = $attrs
    }

    $onInit() {
      nullCheck(this.points, 'points is required for <polygon>')

      this.mapCtrl.mapReady
        .then(() => {
          const points = transformPoints(this.points, '<polygon> points')
          const opts = this.options
          const polygon = (this.polygon = new BMap.Polygon(points, opts))
          this.mapCtrl.addOverlay(polygon)
          return polygon
        })
        .then(polygon => {
          this.loaded({
            polygon
          })
          this.$scope.$apply()
        })
    }

    $onChanges(changes) {
      if (!this.polygon) {
        return
      }
      if (changes.points && changes.points.currentValue) {
        this.polygon.setPath(transformPoints(changes.points.currentValue, '<polygon> points'))
      }
      if (!changes.options || !changes.options.currentValue) {
        return
      }
      if (!isUndefined(changes.options.currentValue.strokeColor)) {
        this.polygon.setStrokeColor(changes.options.currentValue.strokeColor)
      }
      if (!isUndefined(changes.options.currentValue.fillColor)) {
        this.polygon.setFillColor(changes.options.currentValue.fillColor)
      }
      if (!isUndefined(changes.options.currentValue.strokeWeight)) {
        this.polygon.setStrokeWeight(changes.options.currentValue.strokeWeight)
      }
      if (!isUndefined(changes.options.currentValue.strokeOpacity)) {
        this.polygon.setStrokeOpacity(changes.options.currentValue.strokeOpacity)
      }
      if (!isUndefined(changes.options.currentValue.fillOpacity)) {
        this.polygon.setFillOpacity(changes.options.currentValue.fillOpacity)
      }
      if (!isUndefined(changes.options.currentValue.strokeStyle)) {
        this.polygon.setStrokeStyle(changes.options.currentValue.strokeStyle)
      }

      if (!isUndefined(changes.options.currentValue.enableMassClear)) {
        this.polygon[changes.options.currentValue.enableMassClear ? 'enableMassClear' : 'disableMassClear']()
      }
      if (!isUndefined(changes.options.currentValue.enableEditing)) {
        this.polygon[changes.options.currentValue.enableEditing ? 'enableEditing' : 'disableEditing']()
      }
    }

    $onDestroy() {
      this.mapCtrl.removeOverlay(this.polygon)
    }
  }
}
