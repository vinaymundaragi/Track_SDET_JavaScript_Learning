function groupEvenOddNos(numbers){
    const groupedEvenOddNos = numbers.reduce((acc, num) => {
        if(num % 2 === 0){
            acc.even.push(num);
        }else{
            acc.odd.push(num);
        }
        return acc;
    }, {even: [], odd: []})
    return groupedEvenOddNos;
}

const numbers = [12, 7, 4, 9, 2, 15, 6];
const result = groupEvenOddNos(numbers);
console.log(result);