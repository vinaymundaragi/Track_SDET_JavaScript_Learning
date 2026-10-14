//Given an array of numbers, use reduce() to group them into two arrays: even and odd.
function countPositiveNegative(numbers){
    const grouped = numbers.reduce(((acc, num) => {
        if(num > 0){
        acc.positive++;
        }else if(num < 0){
            acc.negative++;
        }

        return acc;

    }), {positive: 0, negative : 0});

    return grouped;
}

const numbers = [5, -2, 8, -1, 0, 3, -7];
const result = countPositiveNegative(numbers);
console.log(result);
