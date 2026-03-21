/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a,b) => a-b);

    let res = 0;
    let curr = nums[0];
    let streak = 0;
    let i = 0;

    while (i < nums.length) {
        if (curr !== nums[i]) {
            curr = nums[i];
            streak = 0;
        }
        while (i < nums.length && nums[i] === curr){
            i++
        };
        streak++;
        curr++;
        res= Math.max(res, streak);
    }
    return res;
};