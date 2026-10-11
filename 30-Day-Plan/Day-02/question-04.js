//Question 4: Find duplicate characters
function findDuplicates(str){
    const visited = new Set();
    const duplicates = new Set();

    for(const char of str){
        if(visited.has(char)){
            duplicates.add(char);
        }else{
            visited.add(char);
        }
    }

    return [...duplicates];

}

let str = "banana";
const result = findDuplicates(str);
console.log(result);