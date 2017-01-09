
import {isObject, isArray, isString} from 'angular';

const clone = function(obj) {
    if (typeof obj !== 'object' || !obj) {
        return obj;
    }
    const copy = {};
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy;
};

export {isObject, isString, isArray};

export function isBoolean(bool) {
    return Object.prototype.toString.call(bool) === '[object Boolean]';
}

export function isNull(obj) {
    return obj === null || obj === undefined;
}

export function isFunction(bool) {
    return Object.prototype.toString.call(bool) === '[object Function]';
}

export function omit(obj, keys) {
    if (!isObject(obj)) {
        return obj;
    }
    if (isArray(keys) && keys.length === 0) {
        return obj;
    }
    if (isString(keys) && !keys) {
        return obj;
    }
    if (!isString(keys) && !isArray(keys)) {
        return obj;
    }
    const o = clone(obj);
    keys.forEach(function(key) {
        delete o[key];
    });
    return o;
}

export function pluck(arr, key) {
    if (!isArray(arr) || arr.length === 0) {
        return [];
    }
    if (!key) {
        return arr;
    }
    return arr.map(a => a[key]);
}

export function isClass(func) {
    const msie = window.document.documentMode;
    // Support: IE 9-11 only
    // IE 9-11 do not support classes and IE9 leaks with the code below.
    if (msie || typeof func !== 'function') {
        return false;
    }
    var result = func.$$ngIsClass;
    if (!isBoolean(result)) {
        // Support: Edge 12-13 only
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/6156135/
        result = func.$$ngIsClass = /^(?:class\b|constructor\()/.test(stringifyFn(func));
    }
    return result;
}

export function isInjectedFunction(func) {
    if (!isArray(func) && !isFunction(func)) {
        return false;
    }
    if (isFunction(func)) {
        return true;
    }
    if (!func.length) {
        return false;
    }
    if (func.length > 1) {
        if (!func.slice(0, func.length - 1).every(k => isString(k))) {
            return false;
        }
    }
    if (!isFunction(func[func.length - 1])) {
        return false;
    }

    return true;
}

export function flatten(previous, current) {
    return previous.concat(current);
}

function stringifyFn(fn) {
    // Support: Chrome 50-51 only
    // Creating a new string by adding `' '` at the end, to hack around some bug in Chrome v50/51
    // (See https://github.com/angular/angular.js/issues/14487.)
    return Function.prototype.toString.call(fn) + ' ';
}
