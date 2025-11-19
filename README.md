# Monad Docs E2E Tests

End-to-end tests for the Monad RPC documentation site, testing the actual user flows through the interactive RPC method pages.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Running Tests

### Prerequisites
Make sure the docs site is running locally:
```bash
# In the monad-docs directory
cd ../monad-docs
npm start
# Site should be available at http://localhost:3000
```

### Run all tests
```bash
npm test
```

### Run tests with UI (interactive mode)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

## Test Against Different Environments

### Local development
```bash
npm test
```

### Production site
```bash
BASE_URL=https://docs.monad.xyz npm test
```

## What's Being Tested

The smoke tests cover:
- ✅ `eth_blockNumber` - Simple method with no parameters
- ✅ `eth_chainId` - Another simple method
- ✅ `eth_getBalance` - Method with required parameters
- ✅ `eth_getBlockByNumber` - Method with multiple parameters
- ✅ `eth_call` - Method with complex JSON object parameter

Each test verifies:
1. Page loads correctly
2. Form accepts parameters
3. "Try it" button works
4. Result is displayed
5. Result format is valid (hex values, proper JSON)

## Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Troubleshooting

### Tests timing out
- Ensure the docs site is running at `http://localhost:3000`
- Check that the RPC endpoint (`https://testnet-rpc.monad.xyz`) is accessible

### Selectors not found
- The tests expect specific HTML structure from the OpenRPCInteraction component
- If you've changed the component structure, update the selectors in the tests

### Network errors
- Tests make real RPC calls to testnet
- If testnet is down, tests will fail
- You can modify tests to use mainnet by changing the network selection

## Adding More Tests

To add tests for additional RPC methods:

1. Create a new test in `tests/smoke.spec.ts` or create a new spec file
2. Follow the existing pattern:
```typescript
test('method_name - description', async ({ page }) => {
  await page.goto('/reference/json-rpc/method_name');

  // Fill parameters if needed
  // await page.locator('input[type="text"]').first().fill('value');

  await page.selectOption('#rpc-endpoint', 'https://testnet-rpc.monad.xyz');
  await page.click('button:has-text("Try it")');
  await expect(page.locator('button:has-text("Try it")')).toBeVisible({ timeout: 10000 });

  const pageContent = await page.content();
  expect(pageContent).toContain('"result"');
});
```

## Future Enhancements

- [ ] Add tests for all RPC methods (auto-generate from openrpc.json)
- [ ] Add CI/CD workflow
- [ ] Test against both testnet and mainnet
- [ ] Add visual regression testing
- [ ] Add network request/response validation
