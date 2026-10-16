//Given an array of numbers and a target, return the indices of two numbers that add up to the target.

function twoSum(nums, target){

    const map = new Map();

    for(let i=0; i<nums.length; i++){
        const corr = target - nums[i];
        if((map.has(corr))){
            return [map.get(corr), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

const nums = [3, 4, 5, 2];
const target = 6;
const result = twoSum(nums, target);
console.log(result);