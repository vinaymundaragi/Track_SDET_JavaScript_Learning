//Remove duplicates from an array
function removeDuplicates(nums){
    const uniques = new Set();

    for(const num of nums){
        if(!(uniques.has(num))){
            uniques.add(num);
        }
    }

    return [...uniques];
}

let nums = [1, 2, 2, 3, 1, 4];
const result = removeDuplicates(nums);
console.log(result);