//every() - when you need to check if all the elements of array satisfy the condition
//input - an array and a testing condition
//output - strict boolean expression - true or false
// Only returns true of all the elements in array satisfy the condition
//else if anyone of the element in array does not satisfy condition,
//then, returns false.

const grades = [85, 90, 78, 92];

const allPassed = grades.every((grade) => grade >= 60);

// console.log(allPassed);

//Mini challenge
const statusCodes = [200, 200, 404, 200, 500];

const ifAnyErrors = statusCodes.some((code) => code >= 400);

console.log(ifAnyErrors);

const allSuccessResponses = statusCodes.every((code) => code === 200);
console.log(allSuccessResponses);