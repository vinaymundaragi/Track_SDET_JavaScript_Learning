function removeDuplicates(nums){
    const duplicates = new Set();

    for(const num of nums){
        duplicates.add(num);
    }

    return [...duplicates];
}

const nums = [1, 2, 2, 3, 1, 4, 3];
const result = removeDuplicates(nums);
console.log(result);