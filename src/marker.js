import {nullCheck} from './helper/validate';

export default {
    bindings: {
        point: '<',
        options: '<'
    },
    require: {
        mapCtrl: '^baiduMap'
    },
    template: '',
    controller: class {
        /*ngInject*/
        constructor() {
            console.log('sfdsfdsdfs');
        }

        $onInit() {

            nullCheck(this.point, 'point is required for <marker>');
            nullCheck(this.point.longitude, 'point.longitude is required for <marker>');
            nullCheck(this.point.latitude, 'point.latitude is required for <marker>');

            this.mapCtrl.addMarker(this.point, this.options);
        }
    }
};
