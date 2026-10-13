//Question 19: Check whether any number is negative using some()

function checkAnyNumberIsNegative(nums){
    const negativeNumber = nums.some(num => num < 0);
    return negativeNumber;
}

let nums = [1, 2, -3, 4];
const result = checkAnyNumberIsNegative(nums);
console.log(result);