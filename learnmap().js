//map() - is the function used to transform every element of an array.
//Always creates a new array and does not edit the original array
//A brand new array with exactly same number of elements - Which has been  modified by instructions.

const numbers = [1,2,3,4,5,6,7,8];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);

//Extracting object data:-
const users = [
    {id: 1, name: "vinay"},
    {id: 2, name: "vijay"},
    {id: 3, name: "sujay"}
];

const userNames = users.map(usersname => usersname.name);

console.log(userNames);
//Mini chalenge
const pricesInUSD = [10, 25, 50, 100];

const pricesInEuro = pricesInUSD.map(price => price * 0.9);

console.log(pricesInEuro);