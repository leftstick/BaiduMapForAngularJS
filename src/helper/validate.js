
export function nullCheck(val, msg) {
    if (isNull(val)) {
        throw new Error(msg);
    }
}

export function isNull(obj) {
    return obj === null || obj === undefined;
}
