// Companies
// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.





// Example 1:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:

// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.
// Example 3:

// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.
 

 
//Receive a 0 index array of nums and a single num.
//A target index is an index i such that nums[i]=target.
//Return a list of the target indices of nums afters sorting nums in ascending order. If there are no target indices return an empty list. Returned list must be sorted in increasing order. 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
   nums=nums.sort((a,b)=>a-b)
    let answer=[]
    nums
    for(let i=0; i<nums.length;i++){
        if(nums[i]==target){
            answer.push(i)


            }

    }
return answer

};
console.log(targetIndices([1,2,2,3],5))