
export function nullCheck(val, msg) {
    if (isNull(val)) {
        throw new Error(msg);
    }
}

export function numberCheck(val, msg) {
    if (isNumber(val)) {
        throw new Error(msg);
    }
}

export function isNull(obj) {
    return obj === null || obj === undefined;
}

export function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

const CONTROL_TYPS = ['navigation', 'overviewmap', 'scale', 'maptype', 'copyright', 'geolocation', 'panorama'];
export function controlTypeCheck(type) {
    if (CONTROL_TYPS.indexOf((type || '').toLowerCase()) < 0) {
        throw new Error(`control type should be one of: [${CONTROL_TYPS.join(',')}]`);
    }
}

const OVERLAY_TYPS = ['heatmap'];
export function overlayTypeCheck(type) {
    if (OVERLAY_TYPS.indexOf((type || '').toLowerCase()) < 0) {
        throw new Error(`overlay type should be one of: [${OVERLAY_TYPS.join(',')}]`);
    }
}
