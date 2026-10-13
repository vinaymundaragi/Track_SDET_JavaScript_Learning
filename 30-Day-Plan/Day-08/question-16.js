//Question 16: Extract adults using filter()

function extractAdults(nums){
    const adults = nums.filter(num => num >= 18);

    return adults;
}

let nums = [12, 18, 25, 16, 30];
const result = extractAdults(nums);
console.log(result);