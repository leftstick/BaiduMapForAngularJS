
import * as style from '../style';
import {nullCheck} from '../helper/validate';
import {load} from '../helper/loader';
import {create, refresh} from '../helper/map';

export default {
    bindings: {
        ak: '@',
        offlineTxt: '<',
        mapOptions: '<',
        loaded: '&',
        click: '&'
    },
    transclude: true,
    template: `
        <div ng-style="$ctrl.style.map" class="baidu-map-instance"></div>
        <div ng-style="$ctrl.style.offline" class="baidu-map-offline">
            <label ng-style="$ctrl.style.offlineLabel">{{ $ctrl.offlineTxt || 'NO_NETWORK' }}</label>
        </div>
        <div ng-transclude style="display: none"></div>
    `,
    controller: class {
        /* @ngInject */
        constructor($scope, $element, $attrs) {
            this.$scope = $scope;
            this.$element = $element;
            this.$attrs = $attrs;
            this.style = style;
        }

        $onInit() {
            nullCheck(this.ak, 'ak is required for <baidu-map>');

            this.mapReady = load(this.ak)
                .then(() => {
                    return create(this.$element.children()[0], this.mapOptions);
                })
                .then(map => {
                    this.loaded({
                        map
                    });
                    this.$scope.$apply();
                    //eslint-disable-next-line
                    return this.map = map;
                })
                .then(() => {
                    if (!this.$attrs.click) {
                        return;
                    }
                    const clickListener = this.clickListener = (e) => {
                        this.click({
                            e
                        });
                    };
                    this.map.addEventListener('click', clickListener);
                });
        }

        $onChanges(changes) {
            if (!this.map) {
                return;
            }
            refresh(this.map, changes.mapOptions.currentValue);
        }

        $onDestroy() {
            this.map.removeEventListener('click', this.clickListener);
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

        getMap() {
            return this.map;
        }
    }
};

function handleMapOperation(map, method, ...args) {
    return new Promise(resolve => {
        map[method](...args);
        resolve();
    });
}

