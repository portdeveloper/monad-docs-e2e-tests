# Monad Docs E2E Tests

E2E tests for the Monad RPC documentation site.

## Setup

```bash
npm install
npx playwright install chromium
```

## Running Tests

Start the docs site locally:
```bash
cd ../monad-docs && npm start
```

Run tests:
```bash
npm test                # Headless
npm run test:ui         # Interactive UI
npm run test:headed     # With browser
```

Test production:
```bash
BASE_URL=https://docs.monad.xyz npm test
```

## Troubleshooting

- Ensure docs site runs at `http://localhost:3000`
- Tests make real RPC calls to testnet
- View test reports: `npx playwright show-report`
