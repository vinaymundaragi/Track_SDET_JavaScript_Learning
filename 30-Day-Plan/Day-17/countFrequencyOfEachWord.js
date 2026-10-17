function countWords(str){
    const map = new Map();

   const words = str.split(" ");

   for(const word of words){
    map.set(word, (map.get(word) || 0)+1);
   }

   return map;
}

const str = "hello world hello";
const result = countWords(str);
console.log(result);