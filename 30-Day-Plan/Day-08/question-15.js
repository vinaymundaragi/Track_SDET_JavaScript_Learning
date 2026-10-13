// /Question 15: Square every number using map()

function squareNosOfArray(nums){
    const squaredArr = nums.map(num => num*num);

    return squaredArr;
}

let nums = [];
const result = squareNosOfArray(nums);
console.log(result);