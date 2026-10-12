//Question 10 — Count occurrences of each number
function countOccurences(nums){
    const map = new Map();

    for(const num of nums){
        map.set(num, (map.get(num) || 0) +1);
    }

    return map;

}

let nums = [5, 5, 5];
const result = countOccurences(nums);
console.log(result);