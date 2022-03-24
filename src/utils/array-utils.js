export const splitSameParts = (array, size) => {
    const res = [];
    while (array.length > 0) {
        res.push(array.splice(0, size));
    }

    return res;
}