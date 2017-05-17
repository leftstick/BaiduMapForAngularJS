
const SCRIPT_URL = '//api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js';

export default function() {

    const loadHeatMapPromise = window.loadHeatMapPromise;
    if (loadHeatMapPromise) {
        return loadHeatMapPromise;
    }

    //eslint-disable-next-line
    return window.loadHeatMapPromise = appendScriptTag(SCRIPT_URL);
}

function appendScriptTag(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onerror = function() {
            document.body.removeChild(script);

            setTimeout(() => {
                appendScriptTag(url);
            }, 30000);
        };
        script.onload = resolve;
        document.body.appendChild(script);

    });
}

