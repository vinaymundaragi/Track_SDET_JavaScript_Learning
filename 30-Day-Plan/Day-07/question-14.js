//Question 14: Check whether an array is sorted

function checkWhetherArrayIsSorted(nums){

    for(let i=1; i<nums.length; i++){
        if(!(nums[i] >= nums[i-1])){
            return false;
        }
    }

    return true;
}

let nums = [1, 2, 2, 4];
const result = checkWhetherArrayIsSorted(nums);
console.log(result);