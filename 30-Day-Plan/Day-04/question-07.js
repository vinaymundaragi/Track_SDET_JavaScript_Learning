//Question 7: Find the second-largest distinct number in an array

function secondLargest(nums){
    let secondlargest = -Infinity;
    let largest = -Infinity;

    for(const num of nums){
        if(num > largest){
            secondlargest = largest;
            largest = num;
        }else if(num > secondlargest && num !== largest){
            secondlargest = num;
        }
    }

    return secondlargest === -Infinity ? null : secondlargest;

}

let nums = [10, 5, 8, 20, 15];
const result = secondLargest(nums);
console.log(result);