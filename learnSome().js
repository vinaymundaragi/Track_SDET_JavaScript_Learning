//some() -  used to find in the given array that "DOES ATLEAST ANY ONE ELEMENT SATISFIES CONDITION"
//input - array and a testing condition
//Output - a strict boolean condition
//As soon as an element that satisfies the condition, then true is returned else, it returns false

const userRoles = ["viewer", "viewer", "admin", "editor"];

const hasAdmin = userRoles.some((userRole) => userRole === "director");

console.log(hasAdmin);