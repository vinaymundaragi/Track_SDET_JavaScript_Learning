//Question 18: Find the first even number using find()

function findFirstEvenNum(nums){
    const firstEvenNum = nums.find(num => num % 2 === 0);
    return firstEvenNum;
}

let nums = [1,3,6,8,10];
const result = findFirstEvenNum(nums);
console.log(result);