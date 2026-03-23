/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const paran = { ')': '(', ']': '[', '}': '{'};
    for (let c of s) {
        if (paran[c]) {
            if (stack.length > 0 && stack[stack.length - 1] === paran[c]) {
                stack.pop()
            } else {
                return false;
            }
        } else {
            stack.push(c)
        }
    }
    return stack.length === 0;
};