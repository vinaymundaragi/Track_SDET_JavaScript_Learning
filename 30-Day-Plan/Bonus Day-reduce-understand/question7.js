function groupEvenOdd(numbers){
    const groupedEvenOdds = numbers.reduce((acc, num) => {
        if(num % 2 === 0){
            acc.even.push(num);
        }else{
            acc.odd.push(num)
        }
        return acc;
    }, {even : [], odd: []});
    return groupedEvenOdds;
}

const numbers = [10, 7, 4, 9, 2, 13, 8];
const result = groupEvenOdd(numbers);
console.log(result);