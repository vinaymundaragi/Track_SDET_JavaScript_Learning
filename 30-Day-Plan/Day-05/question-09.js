//Question 9: Find the missing number
/*
Input	         Expected output
[1, 2, 4, 5]	        3
[1, 3]	                2
[2, 3, 4, 5]	        1
[1, 2, 3, 4]	        5
*/

function findMissingNumber(nums){
    const n = nums.length+1;
    const arrSum = nums.reduce(((acc, num) => acc + num), 0);
    return ((n*(n+1))/2) - arrSum;
}

let nums = [1, 2, 3, 4, 5];
const result = findMissingNumber(nums);
console.log(result);