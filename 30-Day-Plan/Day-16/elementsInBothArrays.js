function findIntersection(arr1, arr2){
    const visited = new Set();
    const duplicates = new Set();

    for(const num of arr2){
        visited.add(num);
    }

    for(const num of arr1){
        if(visited.has(num)){
            duplicates.add(num);
        }else{
            visited.add(num);
        }
    }

    return [...duplicates];
}

const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 3, 3, 5, 6];
const result = findIntersection(arr1, arr2);
console.log(result);
// Expected output: [2, 3]