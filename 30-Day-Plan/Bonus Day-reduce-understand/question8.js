function countPositiveNegative(numbers){
    const groupedPositiveNegative = numbers.reduce((acc, num) => {
        if(num > 0){
            acc.positive++;
        }else if(num < 0){
            acc.negative++;
        }
        return acc;
    }, {positive: 0, negative: 0});
    return groupedPositiveNegative;
}

const numbers = [5, -3, 0, 8, -2, 0, 7, -1];
const result = countPositiveNegative(numbers);
console.log(result);