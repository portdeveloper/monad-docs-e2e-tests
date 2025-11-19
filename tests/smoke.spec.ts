import { test, expect } from "@playwright/test";

test.describe("RPC Documentation Smoke Tests", () => {
  test("Test eth_chainId", async ({ page }) => {
    await page.goto("http://localhost:3000/reference/json-rpc/eth_chainId");
    await page.getByRole("button", { name: "Try it" }).click();
    await expect(page.getByRole("main")).toContainText('"0x279f"');
  });
});
