//Question 13: Find the intersection of two arrays

function intersectionOfTwoArrays(nums1, nums2){
    const visited = new Set();
    const duplicates = new Set();

    for(const num of nums2){
        visited.add(num);
    }

    for(const num of nums1){
        if(visited.has(num)){
            duplicates.add(num);
        }
    }

    return [...duplicates];
}

let nums1 = [4,2,3,1];
let nums2 = [1,2,4];

const result = intersectionOfTwoArrays(nums1, nums2);
console.log(result);