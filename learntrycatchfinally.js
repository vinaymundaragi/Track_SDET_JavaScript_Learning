/*
Because await pauses execution until a Promise settles, any Promise
rejection turns into a standard JavaScript exception. You handle
these failures using standard try...catch blocks.
*/
async function safeLoginCheck(page) {
  try {
    await page.goto("https://example.com/login");
    await page.fill("#username", "invalid_user");
    await page.click("#login-btn");

    // This locator will throw a TimeoutError if the element never appears
    await page.locator(".dashboard-banner").waitFor({ timeout: 5000 });
    console.log("Login successful!");
  } catch (error) {
    console.warn("Expected failure occurred:", error.message);
    // Take a failure screenshot as part of error handling
    await page.screenshot({ path: "failure.png" });
  } finally {
    // This always runs, even if the try or catch failed
    console.log("Cleaning up test session...");
  }
}