function findDifference(arr1, arr2){
    const visited = new Set(arr2);
    const difference = new Set();

    for(const num of arr1){
        if(!visited.has(num)){
            difference.add(num);
        }
    }

    return [...difference];
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6];
const result = findDifference(arr1, arr2);
console.log(result);