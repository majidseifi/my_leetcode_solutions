/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length
    k %= n;

    const doubleNums = [...nums, ...nums];

    const result = doubleNums.slice(n - k, n - k + n);
    for (let i = 0; i< n; i++) {
        nums[i] = result[i]
    }
};