
import {map as mapStyle, offline, offlineLabel} from '../style';
import {nullCheck} from '../helper/validate';
import {load} from '../helper/loader';
import {create} from '../helper/map';

export default {
    bindings: {
        ak: '@',
        offlineTxt: '<',
        mapOptions: '<',
        onLoaded: '&'
    },
    transclude: true,
    template: `
        <div ng-style="$ctrl.style.map" class="baidu-map-instance"></div>
        <div ng-style="$ctrl.style.div" class="baidu-map-offline">
            <label ng-style="$ctrl.style.label">{{ $ctrl.offlineTxt || 'NO_NETWORK' }}</label>
        </div>
        <div ng-transclude style="display: none"></div>
    `,
    controller: class {
        /*ngInject*/
        constructor($element) {
            this.$element = $element;
            this.style = {
                div: offline,
                label: offlineLabel,
                map: mapStyle
            };
        }

        $onInit() {
            nullCheck(this.ak, 'ak is required for <baidu-map>');

            this.mapReady = load(this.ak)
                .then(() => {
                    return create(this.$element.children()[0], this.mapOptions);
                })
                .then(map => {
                    this.onLoaded({
                        map
                    });
                    this.map = map;
                    return map;
                });
        }

        addOverlay(marker) {
            return handleMapOperation(this.map, 'addOverlay', marker);
        }

        removeOverlay(marker) {
            return handleMapOperation(this.map, 'removeOverlay', marker);
        }

        addControl(control) {
            return handleMapOperation(this.map, 'addControl', control);
        }

        removeControl(control) {
            return handleMapOperation(this.map, 'removeControl', control);
        }
    }
};

function handleMapOperation(map, method, ...args) {
    return new Promise(resolve => {
        map[method](...args);
        resolve();
    });
}
