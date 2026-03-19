/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res='';
    for (const s of strs) {
        res += s.length + "#" + s;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let res = [];
    let i = 0;
    while (i < s.length){
        let j = i;
        while (s[j] !== "#") {
            j++;
        }
        let length = parseInt(s.substring(i, j));
        i = j + 1;
        j = i + length;
        res.push(s.substring(i,j));
        i = j;
    }
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */