import {isArray, controlTypeCheck} from '../helper/validate';

export default {
    bindings: {
        type: '@',
        options: '<'
    },
    require: {
        mapCtrl: '^baiduMap'
    },
    template: '',
    controller: class {
        /* @ngInject */
        constructor() {}

        $onInit() {
            controlTypeCheck(this.type);

            this.mapCtrl
                .mapReady
                .then(() => createControl(this.type.toLowerCase(), this.options))
                .then(control => {
                    this.mapCtrl.addControl(control);
                    this.control = control;
                    return control;
                });
        }

        $onDestroy() {
            this.mapCtrl.removeControl(this.control);
        }
    }
};

function createControl(type, options) {
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
        const copyright = new BMap.CopyrightControl(options);
        if (isArray(options.copyrights)) {
            options.copyrights.forEach(r => {
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
