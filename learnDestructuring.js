//Destructing provides syntax to unpack values from arrays or properties from objects directly into distinct variables.
//1. Array destructuring
const rgb = [255, 120, 0];
const [r, g, b] = rgb;

console.log(b);

//Notice how this improves the Object.entries() loop:

//2. Object Destructuring
//Unpacks item by property name(key):
const browserConfig = {
  browser: "Chromium",
  headless: true,
  timeout: 30000
};

const {browser, headless, timeout} = browserConfig;

console.log(browser);
console.log(headless);
console.log(timeout);

//You can also rename variables during extraction:

const {browser : browsername} = browserConfig;

console.log(browser);
console.log(browsername);