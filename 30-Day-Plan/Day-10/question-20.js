//Question 20: Check whether every number is positive using every()
function checkEveryNumPositive(nums){
    const isEveryNUmPositive = nums.every(num => num > 0);

    return isEveryNUmPositive;
}

let nums = [1, 2, 3, 4];
const result = checkEveryNumPositive(nums);
console.log(result);