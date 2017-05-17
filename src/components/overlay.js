import {overlayTypeCheck} from '../helper/validate';
import {createHeatmapOverlay} from './heatmap';

export default {
    bindings: {
        type: '@',
        options: '<',
        dataset: '<'
    },
    require: {
        mapCtrl: '^baiduMap'
    },
    template: '',
    controller: class {
        /* @ngInject */
        constructor() {}

        $onInit() {
            overlayTypeCheck(this.type);

            this.realType = this.type.toLowerCase();

            this.mapCtrl
                .mapReady
                .then(() => createOverlay(this.realType, this.options))
                .then(overlay => {
                    this.mapCtrl.addOverlay(overlay);
                    this.overlay = overlay;
                    setExtraData(this.realType, this.overlay, this.dataset);
                    return overlay;
                });
        }

        $onChanges(changes) {
            if (changes.dataset && changes.dataset.currentValue) {
                setExtraData(this.realType, this.overlay, changes.dataset.currentValue);
            }

        }

        $onDestroy() {
            this.mapCtrl.removeOverlay(this.overlay);
        }
    }
};

function createOverlay(type, options) {
    if (type === 'heatmap') {
        return createHeatmapOverlay(options);
    }
}

function setExtraData(type, overlay, data) {
    if (type === 'heatmap') {
        if (data) {
            overlay.setDataSet(data);
        }
    }
}
