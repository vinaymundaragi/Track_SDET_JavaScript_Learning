function countPositiveNegative(numbers){
    const countedPosNegCount = numbers.reduce((acc, num) => {
        if(num > 0){
            acc.positive++;
        }else if(num < 0){
            acc.negative++;
        }
        return acc;
    }, {positive:0, negative:0});
    return countedPosNegCount;
}

const numbers = [10, -5, 0, 8, -2, 0, -7, 3];
const result = countPositiveNegative(numbers);
console.log(result);