
import {div, label} from './style/offline';
import {nullCheck} from './helper/validate';
import {load} from './helper/loader';
import {create} from './helper/map';

export default {
    bindings: {
        ak: '@',
        offlineTxt: '<',
        mapOptions: '<',
        onLoaded: '&'
    },
    transclude: true,
    template: `
        <div ng-style="$ctrl.style.div">
            <label ng-style="$ctrl.style.label">{{ $ctrl.offlineTxt || 'NO_NETWORK' }}</label>
        </div>
        <div ng-transclude style="display: none"></div>
    `,
    controller: class {
        /*ngInject*/
        constructor($element) {
            this.$element = $element;
            this.style = {
                div,
                label
            };
        }

        $onInit() {
            nullCheck(this.ak, 'ak is required for <baidu-map>');

            this.mapReady = load(this.ak)
                .then(() => {
                    return create(this.$element[0], this.mapOptions);
                })
                .then(map => {
                    this.onLoaded({
                        map
                    });
                    return map;
                });
        }

        addMarker(point, options) {
            this
                .mapReady
                .then(map => {
                    map.addOverlay(new BMap.Marker(new BMap.Point(point.longitude, point.latitude), options));
                });
        }
    }
};
