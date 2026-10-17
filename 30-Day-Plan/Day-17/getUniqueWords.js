function getUniqueWords(str){

    return [...new Set(str.split(" "))];
}

const str = "hello world hello QA world";
const result = getUniqueWords(str);
console.log(result);
// Expected: ["hello", "world", "QA"]