import {nullCheck} from './validate';

export function transformIcon(icon, field) {
    const opts = {
        url: icon.url
    };
    nullCheck(icon.url, `url is required in ${field}`);
    nullCheck(icon.size, `size is required in ${field}`);
    opts.size = transformSize(icon.size, `${field}.size`);
    return new BMap.Icon(opts.url, opts.size);
}

export function transformSize(size, field) {
    nullCheck(size.width, `width is required in ${field}`);
    nullCheck(size.height, `height is required in ${field}`);
    return new BMap.Size(size.width, size.height);
}

export function transformPoint(point, field) {
    nullCheck(point.longitude, `longitude is required in ${field}`);
    nullCheck(point.latitude, `latitude is required in ${field}`);
    return new BMap.Point(point.longitude, point.latitude);
}
