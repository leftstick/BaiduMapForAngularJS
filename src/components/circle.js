import { nullCheck, isUndefined } from '../helper/validate'
import { transformPoint } from '../helper/transformer'

export default {
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
  controller: class {
    /* @ngInject */
    constructor($scope, $attrs) {
      this.$scope = $scope
      this.$attrs = $attrs
    }

    $onInit() {
      nullCheck(this.center, 'center is required for <circle>')
      nullCheck(this.radius, 'radius is required for <circle>')

      this.mapCtrl.mapReady
        .then(() => {
          const { center, radius, options } = this
          const point = transformPoint(center, '<circle> center')
          const circle = (this.circle = new BMap.Circle(point, radius, options))
          this.mapCtrl.addOverlay(circle)
          return circle
        })
        .then(circle => {
          this.loaded({
            circle
          })
          this.$scope.$apply()
        })
    }

    $onChanges(changes) {
      if (!this.circle) {
        return
      }
      if (changes.center && changes.center.currentValue) {
        this.circle.setCenter(transformPoint(changes.center.currentValue, '<circle> center'))
      }
      if (changes.radius && changes.radius.currentValue) {
        this.circle.setRadius(changes.radius.currentValue)
      }
      if (!changes.options || !changes.options.currentValue) {
        return
      }

      if (!isUndefined(changes.options.currentValue.strokeColor)) {
        this.circle.setStrokeColor(changes.options.currentValue.strokeColor)
      }
      if (!isUndefined(changes.options.currentValue.strokeWeight)) {
        this.circle.setStrokeWeight(changes.options.currentValue.strokeWeight)
      }
      if (!isUndefined(changes.options.currentValue.strokeOpacity)) {
        this.circle.setStrokeOpacity(changes.options.currentValue.strokeOpacity)
      }
      if (!isUndefined(changes.options.currentValue.strokeStyle)) {
        this.circle.setStrokeStyle(changes.options.currentValue.strokeStyle)
      }
      if (!isUndefined(changes.options.currentValue.fillOpacity)) {
        this.circle.setFillOpacity(changes.options.currentValue.fillOpacity)
      }
      if (!isUndefined(changes.options.currentValue.fillColor)) {
        this.circle.setFillColor(changes.options.currentValue.fillColor)
      }

      if (!isUndefined(changes.options.currentValue.enableMassClear)) {
        this.circle[changes.options.currentValue.enableMassClear ? 'enableMassClear' : 'disableMassClear']()
      }

      if (!isUndefined(changes.options.currentValue.enableEditing)) {
        this.circle[changes.options.currentValue.enableEditing ? 'enableEditing' : 'disableEditing']()
      }
    }

    $onDestroy() {
      this.mapCtrl.removeOverlay(this.circle)
    }
  }
}
