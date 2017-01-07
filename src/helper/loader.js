
export function load(ak) {
    const MAP_URL = `//api.map.baidu.com/api?v=2.0&ak=${ak}&callback=baidumapinit&s=${location.protocol === 'https:' ? 1 : 0}`;

    const loadBaiduMapPromise = window.loadBaiduMapPromise;
    if (loadBaiduMapPromise) {
        return loadBaiduMapPromise;
    }

    //eslint-disable-next-line
    return window.loadBaiduMapPromise = new Promise((resolve, reject) => {
        window.baidumapinit = () => {
            Array.prototype
                .slice
                .call(document.querySelectorAll('baidu-map'))
                .forEach(function(node) {
                    node.removeChild(node.querySelector('.baidu-map-offline'));
                    node.querySelector('.baidu-map-instance').style.display = 'block';
                });
            resolve();
        };

        appendScriptTag(MAP_URL);
    });
}

function appendScriptTag(url) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function() {

        Array.prototype
            .slice
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
