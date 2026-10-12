//Question 11: Find the largest and smallest numbers

function largestAndSmallest(nums){
    let large=nums[0];
    let small=nums[0];

    for(let i=1; i<nums.length; i++){
        if(nums[i] > large){
            large = nums[i];
        }

        if(nums[i] < small){
            small = nums[i];
        }
    }

    return [small, large];
}

let nums = [4];
const result = largestAndSmallest(nums);
console.log(result);