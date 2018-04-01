import { nullCheck } from '../helper/validate'
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
      nullCheck(this.points, 'points is required for <polyline>')

      this.mapCtrl.mapReady
        .then(() => {
          const points = transformPoints(this.points, '<polyline> points')
          const opts = this.options
          const polyline = (this.polyline = new BMap.Polyline(points, opts))
          this.mapCtrl.addOverlay(polyline)
          return polyline
        })
        .then(polyline => {
          this.loaded({
            polyline
          })
          this.$scope.$apply()
        })
    }

    $onChanges(changes) {
      if (!this.polyline) {
        return
      }
      if (changes.points && changes.points.currentValue) {
        this.polyline.setPath(transformPoints(changes.points.currentValue, '<polyline> points'))
      }
      if (changes.options && changes.options.currentValue) {
        this.polyline.setStrokeColor(changes.options.currentValue.strokeColor)
        this.polyline.setStrokeWeight(changes.options.currentValue.strokeWeight)
        this.polyline.setStrokeOpacity(changes.options.currentValue.strokeOpacity)
        this.polyline.setStrokeStyle(changes.options.currentValue.strokeStyle)

        this.polyline[changes.options.currentValue.enableMassClear ? 'enableMassClear' : 'disableMassClear']()
        this.polyline[changes.options.currentValue.enableEditing ? 'enableEditing' : 'disableEditing']()
      }
    }

    $onDestroy() {
      this.mapCtrl.removeOverlay(this.polyline)
    }
  }
}
