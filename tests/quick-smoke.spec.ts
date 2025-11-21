import { test, expect } from "@playwright/test";

// Quick smoke tests - just 3 tests for fast feedback
test.describe("Quick RPC Smoke Tests", () => {
  test("eth_blockNumber - should get block number", async ({ page }) => {
    await page.goto("http://localhost:3000/reference/json-rpc/eth_blockNumber");
    await page.getByRole("button", { name: "Try it" }).click();
    const responseText = await page.locator('[class*="resultPre"]').textContent();
    expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
  });

  test("eth_chainId - should get chain ID", async ({ page }) => {
    await page.goto("http://localhost:3000/reference/json-rpc/eth_chainId");
    await page.getByRole("button", { name: "Try it" }).click();
    await expect(page.getByRole("main")).toContainText('"0x279f"');
  });

  test("eth_gasPrice - should get gas price", async ({ page }) => {
    await page.goto("http://localhost:3000/reference/json-rpc/eth_gasPrice");
    await page.getByRole("button", { name: "Try it" }).click();
    const responseText = await page.locator('[class*="resultPre"]').textContent();
    expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
  });
});
