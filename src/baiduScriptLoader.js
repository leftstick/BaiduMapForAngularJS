
export const loader = function(ak, callback) {
    var MAP_URL = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=baidumapinit`;

    var baiduMap = window.baiduMap;
    if (baiduMap && baiduMap.status === 'loading') {
        return baiduMap.callbacks.push(callback);
    }

    if (baiduMap && baiduMap.status === 'loaded') {
        return callback();
    }

    window.baiduMap = {status: 'loading', callbacks: []};
    window.baidumapinit = function() {
        window.baiduMap.status = 'loaded';
        callback();
        window.baiduMap.callbacks.forEach(cb => cb());
        window.baiduMap.callbacks = [];
    };

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = MAP_URL;
    document.body.appendChild(script);
};
