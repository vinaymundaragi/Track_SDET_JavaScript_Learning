function reverseString(str){
    
    const charArr = str.split("");

    let start = 0;
    let end = str.length-1;

    while(start<end){
        let temp = charArr[start];
        charArr[start] = charArr[end];
        charArr[end] = temp;
        start++;
        end--;
    }

    return charArr.join("");
}
let str = "";
const result = reverseString(str);
console.log(result);