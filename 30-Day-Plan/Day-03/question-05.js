//Question 5: Find the first non-repeating character
function firstNonRepeatingCharacter(str){
    const map = new Map();

    for(const char of str){
        map.set(char, (map.get(char) || 0)+1);
    }

    for(const [char, count] of map.entries()){
        if(count === 1){
            return char;
        }
    }
    return null;
}   

let str = "swiss";
const result = firstNonRepeatingCharacter(str);
console.log(result);