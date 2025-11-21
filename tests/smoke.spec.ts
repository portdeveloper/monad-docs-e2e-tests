import { test, expect } from "@playwright/test";

test.describe("RPC Documentation Smoke Tests", () => {
  // Simple state queries
  test.describe("Simple State Queries", () => {
    test("eth_blockNumber", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_blockNumber");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("eth_chainId", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_chainId");
      await page.getByRole("button", { name: "Try it" }).click();
      await expect(page.getByRole("main")).toContainText('"0x279f"');
    });

    test("eth_gasPrice", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_gasPrice");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("eth_maxPriorityFeePerGas", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_maxPriorityFeePerGas");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("net_version", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/net_version");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"/);
    });

    test("web3_clientVersion", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/web3_clientVersion");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"/);
    });
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
        "http://localhost:3000/reference/json-rpc/debug_getRawBlock?block=0x306655a"
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
        "http://localhost:3000/reference/json-rpc/debug_getRawHeader?block=0x306655a"
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
        "http://localhost:3000/reference/json-rpc/debug_getRawReceipts?block=0x306655a"
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

  test.describe("debug_traceBlockByHash", () => {
    test("with block hash and callTracer", async ({ page }) => {
      const blockHash = "0x56491d0feee95aa3a40264b0118d9513619643f9e78f0bd8ae4c924bceffaae6";
      const tracer = encodeURIComponent('{"tracer":"callTracer"}');
      await page.goto(
        `http://localhost:3000/reference/json-rpc/debug_traceBlockByHash?block_hash=${blockHash}&tracer=${tracer}`
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });
  });

  test.describe("debug_traceBlockByNumber", () => {
    test("with block number and callTracer", async ({ page }) => {
      const blockNumber = "0x306655a";
      const tracer = encodeURIComponent('{"tracer":"callTracer"}');
      await page.goto(
        `http://localhost:3000/reference/json-rpc/debug_traceBlockByNumber?block_number=${blockNumber}&tracer=${tracer}`
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });

    test("with latest and callTracer", async ({ page }) => {
      const blockNumber = "latest";
      const tracer = encodeURIComponent('{"tracer":"callTracer"}');
      await page.goto(
        `http://localhost:3000/reference/json-rpc/debug_traceBlockByNumber?block_number=${blockNumber}&tracer=${tracer}`
      );
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });
  });

  // Block queries
  test.describe("eth_getBlockByNumber", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockByNumber?block_number=latest&return_full_txns=false");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockByNumber?block_number=0x306655a&return_full_txns=false");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  test.describe("eth_getBlockByHash", () => {
    test("with block hash", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockByHash?block_hash=0x56491d0feee95aa3a40264b0118d9513619643f9e78f0bd8ae4c924bceffaae6&return_full_txns=false");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  // Transaction queries
  test.describe("eth_getTransactionByHash", () => {
    test("with transaction hash", async ({ page }) => {
      const txHash = "0x72373453e2d29aa4f8ba3bc9e0c7f3489647ac105c5dbc9336e5577725483abc";
      await page.goto(`http://localhost:3000/reference/json-rpc/eth_getTransactionByHash?tx_hash=${txHash}`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  test.describe("eth_getTransactionReceipt", () => {
    test("with transaction hash", async ({ page }) => {
      const txHash = "0x72373453e2d29aa4f8ba3bc9e0c7f3489647ac105c5dbc9336e5577725483abc";
      await page.goto(`http://localhost:3000/reference/json-rpc/eth_getTransactionReceipt?tx_hash=${txHash}`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  // Account state queries
  test.describe("eth_getBalance", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBalance?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&block_number=latest");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBalance?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&block_number=0x306655a");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });

  test.describe("eth_getTransactionCount", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getTransactionCount?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&block=latest");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getTransactionCount?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&block=0x306655a");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });

  // Call/Estimate methods
  test.describe("eth_call", () => {
    test("with latest", async ({ page }) => {
      const transaction = encodeURIComponent('{"to":"0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701","data":"0x70a08231000000000000000000000000e81dff58f4401c4923fca785fa616292e94138ff"}');
      await page.goto(`http://localhost:3000/reference/json-rpc/eth_call?transaction=${transaction}&block=latest`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]*"/);
    });
  });

  test.describe("eth_estimateGas", () => {
    test("with latest", async ({ page }) => {
      const tx = encodeURIComponent('{"from":"0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e","to":"0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e","value":"0x0"}');
      await page.goto(`http://localhost:3000/reference/json-rpc/eth_estimateGas?tx=${tx}&block=latest`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });

  // Additional methods
  test.describe("debug_traceCall", () => {
    test("with latest and callTracer", async ({ page }) => {
      const transaction = encodeURIComponent('{"to":"0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701","data":"0x70a08231000000000000000000000000e81dff58f4401c4923fca785fa616292e94138ff"}');
      const tracer = encodeURIComponent('{"tracer":"callTracer"}');
      await page.goto(`http://localhost:3000/reference/json-rpc/debug_traceCall?transaction=${transaction}&block=latest&tracer=${tracer}`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });

    test("with hex block number and callTracer", async ({ page }) => {
      const transaction = encodeURIComponent('{"to":"0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701","data":"0x70a08231000000000000000000000000e81dff58f4401c4923fca785fa616292e94138ff"}');
      const tracer = encodeURIComponent('{"tracer":"callTracer"}');
      await page.goto(`http://localhost:3000/reference/json-rpc/debug_traceCall?transaction=${transaction}&block=0x306655a&tracer=${tracer}`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  test.describe("debug_traceTransaction", () => {
    test("with transaction hash and callTracer", async ({ page }) => {
      const txHash = "0x72373453e2d29aa4f8ba3bc9e0c7f3489647ac105c5dbc9336e5577725483abc";
      const tracer = encodeURIComponent('{"tracer":"callTracer"}');
      await page.goto(`http://localhost:3000/reference/json-rpc/debug_traceTransaction?tx_hash=${txHash}&tracer=${tracer}`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  test.describe("eth_createAccessList", () => {
    test("with latest", async ({ page }) => {
      const transaction = encodeURIComponent('{"from":"0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e","to":"0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e","value":"0x0"}');
      await page.goto(`http://localhost:3000/reference/json-rpc/eth_createAccessList?transaction=${transaction}&block=latest`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });

    test("with hex block number", async ({ page }) => {
      const transaction = encodeURIComponent('{"from":"0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e","to":"0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e","value":"0x0"}');
      await page.goto(`http://localhost:3000/reference/json-rpc/eth_createAccessList?transaction=${transaction}&block=0x306655a`);
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  test.describe("eth_feeHistory", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_feeHistory?block_count=10&newest_block=latest&reward_percentiles=%5B%5D");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_feeHistory?block_count=10&newest_block=0x306655a&reward_percentiles=%5B%5D");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\{/);
    });
  });

  test.describe("eth_getBlockReceipts", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockReceipts?block=latest");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockReceipts?block=0x306655a");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });

    test("with block hash", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockReceipts?block=0x56491d0feee95aa3a40264b0118d9513619643f9e78f0bd8ae4c924bceffaae6");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });
  });

  test.describe("eth_getBlockTransactionCountByHash", () => {
    test("with block hash", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockTransactionCountByHash?block_hash=0x56491d0feee95aa3a40264b0118d9513619643f9e78f0bd8ae4c924bceffaae6");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });

  test.describe("eth_getBlockTransactionCountByNumber", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockTransactionCountByNumber?block_tag=latest");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getBlockTransactionCountByNumber?block_tag=0x306655a");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]+"/);
    });
  });

  test.describe("eth_getCode", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getCode?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&block=latest");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getCode?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&block=0x306655a");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x/);
    });
  });

  test.describe("eth_getLogs", () => {
    test("with block range and address", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getLogs?fromBlock=0x306655a&toBlock=0x306655a&address=0x0000000000000000000000000000000000001000&topics=%5B%5D&filters=%7B%22fromBlock%22%3A%220x306655a%22%2C%22toBlock%22%3A%220x306655a%22%2C%22address%22%3A%220x0000000000000000000000000000000000001000%22%7D");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^\[/);
    });
  });

  test.describe("eth_getStorageAt", () => {
    test("with latest", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getStorageAt?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&position=0&block=latest");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]*"/);
    });

    test("with hex block number", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getStorageAt?account=0x6f49a8f621353f12378d0046e7d7e4b9b249dc9e&position=0&block=0x306655a");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toMatch(/^"0x[0-9a-fA-F]*"/);
    });
  });

  test.describe("eth_getTransactionByBlockHashAndIndex", () => {
    test("with block hash and index", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getTransactionByBlockHashAndIndex?block_hash=0x56491d0feee95aa3a40264b0118d9513619643f9e78f0bd8ae4c924bceffaae6&index=0");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toBeTruthy();
    });
  });

  test.describe("eth_getTransactionByBlockNumberAndIndex", () => {
    test("with latest and index", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getTransactionByBlockNumberAndIndex?block_tag=latest&index=0");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toBeTruthy();
    });

    test("with hex block number and index", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_getTransactionByBlockNumberAndIndex?block_tag=0x306655a&index=0");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toBeTruthy();
    });
  });

  test.describe("eth_syncing", () => {
    test("get sync status", async ({ page }) => {
      await page.goto("http://localhost:3000/reference/json-rpc/eth_syncing");
      await page.getByRole("button", { name: "Try it" }).click();
      const responseText = await page.locator('[class*="resultPre"]').textContent();
      expect(responseText).toBeTruthy();
    });
  });
});
