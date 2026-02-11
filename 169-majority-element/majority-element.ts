function majorityElement(nums: number[]): number {
    let result;
    let count = 0;

    for (const num of nums) {
        if (count === 0){
            result = num;
        }
        
        if (num === result){
            count += 1;
        } else {
            count -= 1;
        }
    }
    return result;
};