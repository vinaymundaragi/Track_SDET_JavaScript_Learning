//Question 6: Check whether two strings are anagrams

function checkAnagrams(p, q){

    if(p.length !== q.length){
        return false;
    }

    const map = new Map();

    for(const char of p){
        map.set(char, (map.get(char) || 0)+1);
    }

    for(const char of q){
        const count = map.get(char);
         if(!count){
            return false;
        }

        map.set(char, (count-1));
    }

    return true;

}

let p = "ab";
let q = "ac";
const result = checkAnagrams(p, q);
console.log(result);
