/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const merged = {};

    for (let i = 0; i < arr1.length; i++) {
        merged[arr1[i].id] = arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        if (merged[arr2[i].id]) {
            for (const key in arr2[i]) merged[arr2[i].id][key] = arr2[i][key];
        } else {
            merged[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(merged);
};