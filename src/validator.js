
export const validator = (prop, desc) => {
    if (!prop) {
        throw new Error(desc);
    }
};
