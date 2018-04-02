import load from '../helper/heatmapScriptLoader'

export default {
  bindings: {
    dataset: '<',
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
      this.mapCtrl.mapReady
        .then(() => {
          return load()
        })
        .then(() => {
          const heatmap = (this.heatmap = new BMapLib.HeatmapOverlay(this.options))
          this.mapCtrl.addOverlay(heatmap)
          return heatmap
        })
        .then(heatmap => {
          this.loaded({
            heatmap
          })
          this.$scope.$apply()
          if (this.dataset) {
            heatmap.setDataSet(this.dataset)
          }
        })
    }

    $onChanges(changes) {
      if (!this.heatmap) {
        return
      }
      if (changes.options && changes.options.currentValue) {
        this.heatmap.setOptions(changes.options.currentValue)
      }
      if (changes.dataset && changes.dataset.currentValue) {
        this.heatmap.setDataSet(changes.dataset.currentValue)
      }
    }

    $onDestroy() {
      this.mapCtrl.removeOverlay(this.heatmap)
    }
  }
}
