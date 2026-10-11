/*
Set - collection of unique elements.
Duplicate added to a set is automatically discardede
Primary use case - Removing duplicates from an array and check for an
item's existence.
Key methods of Set:-
 .add(value) - adds an element to set
 .has(value) - checks for an element's existence in an array - returns true if element is found else false
 .delete(value) - removes an element from a set
 .size() - property to count number of unique elements
*/

const rawtags = ["smoke", "regression", "smoke", "api", "ui", "regression","sanity"];
const uniquetags = [...new Set(rawtags)];

console.log(uniquetags);