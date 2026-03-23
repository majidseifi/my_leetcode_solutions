/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r){
        while (l < r && !/[a-z0-9]/i.test(s[l])){
            l++;
        }
        while (r > l && !/[a-z0-9]/i.test(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};