//Object.entries(user) - returns an array of nested [key, value] pairs
const user = {
  name: "Vinay Mundaragi",
  age: 31,
  role: "SDET 3",
  skills: "JavaScript+Playwright and API testing, CI/CD, Github Workflow",
  experience: "5+ years"
};

// console.log(Object.entries(user));

//Mini challenge
const testResults = {
  passed: 45,
  failed: 5,
  skipped: 2
};

//tasks
/*
1. In your learnObject.keys().js file, get the array of test statuses and log it.
2. In your learnObject.values().js file, use Object.values() combined with reduce() to
calculate the total count of all tests run ($45 + 5 + 2$).
3. In your learnObject.Entries().js file, use Object.entries()
with a for...of loop to print each status and its count in this format: "Status: passed, Count: 45".
*/
const testStatuses = Object.keys(testResults);
console.log(testStatuses);

const testCount = Object.values(testResults);

const totalTestCount = testCount.reduce(((acc, count) => acc + count), 0);
console.log(totalTestCount);

const allStatuses = Object.entries(testResults);
for(const entry of allStatuses){
    console.log(`Status: ${entry[0]}, Count: ${entry[1]}`);
}