/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {};
    for (let s of strs){
        let count = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        const key = count.join(',');
        if(!res[key]) {
            res[key] = [];
        }
        res[key].push(s);
    }
    return Object.values(res);
};