//find() - helps in finding the first element that matches the condition.
//Difference between filter() and find() is that filter() check the condition for
//each item of array and teh returns an array
//Whereas, find() - returns the first element that matched the condition. If no element matches,
//Then returns undefined

const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" }
];

const foundUser = users.find(user => user.id === "93939");
// console.log(foundUser);

//Mini challenge
const inventory = [
  { name: "Apples", quantity: 0 },
  { name: "Bananas", quantity: 12 },
  { name: "Cherries", quantity: 0 },
  { name: "Dates", quantity: 5 }
];

//first product that is out of stock

const outOfStockProduct = inventory.find(inventory => inventory.quantity === 0);
console.log(outOfStockProduct);