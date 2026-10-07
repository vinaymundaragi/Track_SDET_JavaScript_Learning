//reduce() - condenses an entire array dwon to a single value.
//Example:- a total sum, an average, a single combined string, or even a restructured object
/*
Call back function - runs on each item and takes two primary parameters:-
 1. accumulator
 2. currentValue
Initial value - which the starting value of the accumulator.
*/

const numbers = [10,20,30,40,50];

const total = numbers.reduce(((acc, curr) => acc + curr), 0);

console.log(total);

//Mini challenge - 
const cart = [
  { item: "Laptop", price: 800 },
  { item: "Mouse", price: 20 },
  { item: "Keyboard", price: 50 }
];

const totalCartAmount = cart.reduce((acc, item) => acc + item.price, 0);

console.log(totalCartAmount);