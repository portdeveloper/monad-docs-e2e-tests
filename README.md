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

## CI Setup

Add this minimal workflow to your docs repo at `.github/workflows/e2e.yml`:

```yaml
name: E2E Tests

on:
  pull_request:
  push:
    branches: [main]

jobs:
  e2e:
    uses: portdeveloper/monad-docs-e2e-tests/.github/workflows/ci.yml@main
    with:
      docs_ref: ${{ github.head_ref || github.ref }}
```

This calls the reusable workflow in this repo, keeping your docs repo clean.

## Troubleshooting

- Ensure docs site runs at `http://localhost:3000`
- Tests make real RPC calls to testnet
- View test reports: `npx playwright show-report`
