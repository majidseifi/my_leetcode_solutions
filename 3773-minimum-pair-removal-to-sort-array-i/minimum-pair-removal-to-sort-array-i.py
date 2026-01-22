class Solution:
    def minimumPairRemoval(self, nums: List[int]) -> int:
        def isSorted(nums) -> bool:
            for i in range(1, len(nums)):
                if nums[i] < nums[i - 1]: return False
            return True
        result = 0

        while not isSorted(nums):
            min_sum = nums[0] + nums[1]
            index = 0

            for i in range(1, len(nums)-1):
                s = nums[i] + nums[i + 1]
                if s < min_sum:
                    min_sum = s
                    index = i

            nums[index] = min_sum
            nums.pop(index + 1)
            result += 1

        return result