//Question 17: Calculate the total using reduce()

function calculateTotal(nums){
    const total = nums.reduce(((acc, num) => acc + num) ,0);

    return total;
}

let nums = [1,2,3,4,5];
const result = calculateTotal(nums);
console.log(result);