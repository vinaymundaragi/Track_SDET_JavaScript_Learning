/*
To avoid using multiple then calls for a multistep browser actions
asyn/await came in
async keyword:- used ahead of a function
Ensures that the fucntion always returns a promise.

await keyword:- used only within a async function
or directly at top level.
Pauses execution of that specific function until the promise resolves or rejects.
*/

async function runTest(){
    await page.goto("example.com");

}

/*
if an action communicates with the browser or tests state, always need to await it.
*/