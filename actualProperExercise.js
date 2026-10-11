const testResults = [
  { testId: "TC-01", suite: "Auth", status: "PASSED", durationMs: 120 },
  { testId: "TC-02", suite: "Checkout", status: "FAILED", durationMs: 450, error: "500 Internal Error" },
  { testId: "TC-03", suite: "Auth", status: "PASSED", durationMs: 90 },
  { testId: "TC-04", suite: "Inventory", status: "SKIPPED", durationMs: 0 },
  { testId: "TC-05", suite: "Checkout", status: "FAILED", durationMs: 310, error: "Timeout on Payment Gateway" },
  { testId: "TC-06", suite: "Inventory", status: "PASSED", durationMs: 180 }
];

//Extract a list of all unique suite names into an array called

const uniqueSuite = [...new Set(testResults)];
// console.log(uniqueSuite);

//Find all tests that failed, and extract only their error messages into an array called failureMessages.
const failedTests = testResults.filter((testResult) => testResult.status === "FAILED");

console.log(failedTests);

const failureMessages = failedTests.map((failedTest) => failedTest.error);
console.log(failureMessages);

//Calculate the total execution time (sum of durationMs) for all tests that actually executed (durationMs > 0).

const actualExecutedTests = testResults.filter((testResult) => testResult.durationMs > 0);

console.log(actualExecutedTests);

const totalDuration = actualExecutedTests.reduce((acc, test) => acc + test.durationMs,0);
console.log(totalDuration);

//find(): Locate the specific test details for test ID "TC-05".
const specificTestDetails = testResults.find(testResult => testResult.testId === "TC-05");
console.log(specificTestDetails);
/*
every() / some():

Check if all tests in the suite passed (allPassed).

Check if at least one test was skipped (hasSkipped).
*/
const allpassed = testResults.every(testresult => testresult.status === "PASSED");

const atleastOneSkipped = testResults.some(testresult => testresult.status === "SKIPPED");

console.log(allpassed);
console.log(atleastOneSkipped);