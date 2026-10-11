//Map - a keyed collection of key-value pairs (like an object {}), but with crucial advantages:-
/*
any data typed key
maintains the insetion order
size look up - map.size

Key methods:-
.set(value, key)- stores a value by key
.get(key) - retrieves value by key
.has(key) - returns if key exists
.delete(key) - removes specific entry
.size - property returning total entries
*/

const userDetails = new Map();

userDetails.set("name", "Vinay");
userDetails.set("age", 31);
userDetails.set("Place", "Hubli");
userDetails.set("Company", "Vyapar");

for(const [key, value] of userDetails){
    // console.log(`${key}-> ${value}`);
}
// console.log(userDetails.size);

//Mini challenge
const userLogins = [101, 102, 101, 105, 102, 108];

const uniqueUserLogins = [...new Set(userLogins)];

console.log(uniqueUserLogins.length);

//Map challenge
const testSuiteStatus = new Map();
testSuiteStatus.set("LoginTest", "PASSED");
testSuiteStatus.set("CheckoutTest", "FAILED");
console.log(testSuiteStatus.get("CheckoutTest"));
console.log(testSuiteStatus.size);