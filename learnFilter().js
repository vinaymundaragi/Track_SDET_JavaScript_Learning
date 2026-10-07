//filter() - method used to select subset of items based on specific true/false condition
//New array is created based on condition.

const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

//Real world example - Filtering records.
const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
  {name: "", isActive: true}
];

const activeUsers = users.filter(users => users.name);

console.log(activeUsers);

//Mini challenge Given scores array return an array with scores >=60
const scores = [45, 82, 60, 91, 30, 75];
const passingScores = scores.filter(score => score >= 60);
console.log(passingScores);