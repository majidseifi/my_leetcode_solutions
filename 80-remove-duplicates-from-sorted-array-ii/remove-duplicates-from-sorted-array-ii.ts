function removeDuplicates(nums: number[]): number {
    let k: number = 2;
    for (let i = 2; i < nums.length; i++){
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k += 1;
        }
    }
    return k;
};