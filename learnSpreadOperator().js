//Spread Operator
/*
Spread operator - Expands an iterable (like an array or string) or an Object into individual
elements
*/
//1. Copying and merging arrays.
const smokeTests = ["Login", "Checkout"];
const regressionTests = ["Profile", "Settings"];

const allsuites = [...smokeTests, ...regressionTests];

// console.log(allsuites);
//Adding elements on fly.

const extendedSuites = ["Healthcheck", ...allsuites, "Logout"];
// console.log(extendedSuites);

//2. Copying and Merging Objects (Overriding values)
const defaultOptions = { headless: true, retries: 1 };
const customOptions = { ...defaultOptions, retries: 3, timeout: 5000 };

// console.log(customOptions);

//Mini challenge
const testRun = {
  testId: "TC-101",
  environment: "Staging",
  durationMs: 1420
};

const {testId:test, environment:env, durationMs:duration} = testRun;

console.log(test);
console.log(env);

const baseHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

const authHeaders = {"Authorization": "Bearer token123", ...baseHeaders};

console.log(authHeaders);