
export function load(ak) {
    const MAP_URL = `//api.map.baidu.com/api?v=2.0&ak=${ak}&callback=baidumapinit&s=${location.protocol === 'https:' ? 1 : 0}`;

    const loadBaiduMapPromise = window.loadBaiduMapPromise;
    if (loadBaiduMapPromise) {
        return loadBaiduMapPromise;
    }

    //eslint-disable-next-line
    return window.loadBaiduMapPromise = new Promise((resolve, reject) => {
        window.baidumapinit = resolve;

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
            .call(document.querySelectorAll('baidu-map div'))
            .forEach(function(node) {
                node.style.opacity = 1;
            });
        document.body.removeChild(script);

        setTimeout(appendScriptTag, 30000);
    };
    document.body.appendChild(script);
}
