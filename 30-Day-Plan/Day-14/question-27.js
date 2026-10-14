//Question 27: Extract unique values using Set
//Problem: Given an array, return a new array containing only unique values, preserving their original order.
function getUniqueValues(nums){
    const unique = new Set();

    for(const num of nums){
        unique.add(num);
    }

    return [...unique]
}

let nums = [1, 2, 2, 3, 1, 4];
const result = getUniqueValues(nums);
console.log(result);