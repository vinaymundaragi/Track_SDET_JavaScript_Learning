//Question 25: Group numbers into even and odd arrays

function groupEvensOdds(nums) {
    let even = [];
    let odd = [];

    for (const num of nums) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }

    return{even, odd}
}

const nums = [1, 2, 3, 4, 5, 6];
const result = groupEvensOdds(nums);

console.log(result);