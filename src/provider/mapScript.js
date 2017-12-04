import {nullCheck} from '../helper/validate';

export default function() {
    let ak = null,
        MAP_URL;

    this.setKey = function(val) {
        ak = val;
        MAP_URL = `//api.map.baidu.com/api?v=2.0&ak=${ak}&callback=baidumapinit`;

        if (location.protocol.indexOf('http') > -1) {
            MAP_URL = `${MAP_URL}&s=${location.protocol === 'https:' ? 1 : 0}`;
        } else {
            MAP_URL = `https:${MAP_URL}&s=1`;
        }
    };

    this.$get = function($rootScope) {
        'ngInject';

        return {
            load: function() {
                nullCheck(
                    ak,
                    'ak should be set before use. Read: https://leftstick.github.io/BaiduMapForAngularJS/#!/quickstart'
                );

                const loadBaiduMapPromise = $rootScope.loadBaiduMapPromise;
                if (loadBaiduMapPromise) {
                    return loadBaiduMapPromise.then(displayMap);
                }

                //eslint-disable-next-line
        return ($rootScope.loadBaiduMapPromise = new Promise(
                    (resolve, reject) => {
                        window.baidumapinit = resolve;
                        appendScriptTag(MAP_URL);
                    }
                ).then(displayMap));
            }
        };
    };
}

function appendScriptTag(url) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function() {
        Array.prototype.slice
            .call(document.querySelectorAll('baidu-map .baidu-map-offline'))
            .forEach(function(node) {
                node.style.display = 'block';
            });
        document.body.removeChild(script);

        setTimeout(() => {
            appendScriptTag(url);
        }, 30000);
    };
    document.body.appendChild(script);
}

function displayMap() {
    return Array.prototype.slice
        .call(document.querySelectorAll('baidu-map'))
        .forEach(function(node) {
            node.querySelector('.baidu-map-offline') &&
        node.removeChild(node.querySelector('.baidu-map-offline'));
            node.querySelector('.baidu-map-instance').style.display = 'block';
        });
}
