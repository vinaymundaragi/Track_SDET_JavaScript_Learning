//Question 12: Move all zeros to the end
function moveZerosToEnd(nums){
    let pos = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[pos] = nums[i];
            pos++;
        }

       
    }

     for(let i=pos; i<nums.length; i++){
            nums[i] = 0;
        }


    return nums;
}

let nums = [0, 0, 0];
const result = moveZerosToEnd(nums);
console.log(result);