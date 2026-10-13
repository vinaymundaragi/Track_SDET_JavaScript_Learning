//Question 21: Double each number and keep only the results greater than 10

function doubleAndGreaterCheck(nums){
    const doubled = nums.map(num => num*2);

    const doubledGreater = doubled.filter(num => num > 10);

    return doubledGreater;
}

let nums = [2, 4, 6, 8];
const result = doubleAndGreaterCheck(nums);
console.log(result);