/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // we can create a map out of the nums and we also can have the key as the num and value as the repetition.
    const count = {}
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)])
    arr.sort((a,b) => b[0]-a[0])

    return arr.slice(0,k).map((pair) => pair[1])
};