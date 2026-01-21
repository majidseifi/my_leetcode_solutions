class Solution:
    def minBitwiseArray(self, nums: List[int]) -> List[int]:
        res=[]
        for num in nums:
            temp = num + 1
            if num == 2:
                res.append(-1)
            else:
                res.append(num-((temp)&(-temp))//2)
        return res