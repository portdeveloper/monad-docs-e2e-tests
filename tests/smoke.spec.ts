import { test, expect } from "@playwright/test";

test.describe("RPC Documentation Smoke Tests", () => {
  test("Test eth_chainId", async ({ page }) => {
    await page.goto("http://localhost:3000/reference/json-rpc/eth_chainId");
    await page.getByRole("button", { name: "Try it" }).click();
    await expect(page.getByRole("main")).toContainText('"0x279f"');
  });

  test.describe("debug_getRawBlock", () => {
    test("with latest block", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawBlock?block=latest"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("with integer block number", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawBlock?block=1"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawBlock?block=0x1"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });

  test.describe("debug_getRawHeader", () => {
    test("with latest block", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawHeader?block=latest"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("with integer block number", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawHeader?block=1"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawHeader?block=0x1"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });

  test.describe("debug_getRawReceipts", () => {
    test("with latest block", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawReceipts?block=latest"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });

    test("with integer block number", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawReceipts?block=1"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto(
        "http://localhost:3000/reference/json-rpc/debug_getRawReceipts?block=0x1"
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });
  });

  test.describe("debug_getRawTransaction", () => {
    test("with transaction hash", async ({ page }) => {
      const txHash = "0x72373453e2d29aa4f8ba3bc9e0c7f3489647ac105c5dbc9336e5577725483abc";
      await page.goto(
        `http://localhost:3000/reference/json-rpc/debug_getRawTransaction?tx_hash=${txHash}`
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });
});
