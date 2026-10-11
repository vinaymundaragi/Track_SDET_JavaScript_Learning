/*
Promise.all():- accepts an iterable (usually an array) of promises and runs them concurrently.
Return behavior:- Resolves when all the input promises are resolved, returning an array of
their results in the exact order requested.
Failure behavior-Rejects immediately if any single promise rejects ("fail-fast")
*/
// WRONG (Potential Race Condition):
// If the navigation happens instantly on click, waitForURL might miss it!
await page.click("#submit");
await page.waitForURL("**/dashboard");

// CORRECT (Concurrent execution using Promise.all):
// Set up the listener AND perform the click simultaneously
await Promise.all([
  page.waitForURL("**/dashboard"),
  page.click("#submit")
]);


//It is also useful for fetching data across multiple elements concurrently:
const userIds = [101, 102, 103];

// Triggers all 3 API calls at the same time instead of sequentially
const [user1, user2, user3] = await Promise.all(
  userIds.map((id) => fetchUserDetails(id))
);