//Question 26: Count numbers greater than 10 using reduce()
function countGreaterThanTen(nums){
    const countGreter = nums.reduce(((acc, num) => num > 10 ? acc + 1 : acc) ,0);

    return countGreter;
}

let nums = [5, 12, 15, 8, 20];
const result = countGreaterThanTen(nums);
console.log(result);