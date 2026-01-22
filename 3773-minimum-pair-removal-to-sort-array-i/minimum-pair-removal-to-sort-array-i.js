/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let count = 0;

    while (nums.length > 1) {
        let isSorted = true;
        let minSum = Infinity;
        let targetIndex = -1

        for (let i = 0; i < nums.length - 1; i++) {
            const sum = nums[i] + nums[i+1];

            if (nums[i] > nums[i+1]) {
                isSorted = false;
            }
            if (sum < minSum) {
                minSum = sum;
                targetIndex = i;
            }
        }

        if (isSorted) {
            break;
        }

        count++;

        nums[targetIndex] = minSum;
        nums.splice(targetIndex + 1, 1);
    }
    
    return count;
};