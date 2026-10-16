function findSymmetricDifference(arr1, arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const symmetricElements = new Set();

    for(const num of set1){
        if((!set2.has(num))){
            symmetricElements.add(num);
        }
    }

    for(const num of set2){
        if(!set1.has(num)){
            symmetricElements.add(num);
        }
    }

    return [...symmetricElements];
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = findSymmetricDifference(arr1, arr2);
console.log(result);