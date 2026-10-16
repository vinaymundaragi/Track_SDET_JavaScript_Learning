/*
Problem: Write a function called countFrequencies(numbers) that 
counts how many times each number appears in an array using a Map.
*/

function countFrequencies(numbers){
    const map = new Map();

    for(const num of numbers){
        map.set(num, (map.get(num) || 0)+1);
    }

    return map;


}
const numbers = [1, 2, 1, 3, 2, 1];
const result = countFrequencies(numbers);
console.log(result);