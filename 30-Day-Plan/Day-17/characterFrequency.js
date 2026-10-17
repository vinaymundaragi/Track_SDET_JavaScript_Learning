function countCharacters(str){
    const charMap = new Map();

    for(const char of str){
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    return charMap;
}

const str = "hello";
const result = countCharacters(str);
console.log(result);