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
    types: [opened, labeled, synchronize]
  workflow_dispatch:

jobs:
  e2e:
    if: contains(github.event.pull_request.labels.*.name, 'e2e') || github.event_name == 'workflow_dispatch'
    uses: portdeveloper/monad-docs-e2e-tests/.github/workflows/ci.yml@main
    with:
      docs_ref: ${{ github.head_ref || github.ref }}
```

**Usage:** Add the `e2e` label to any PR to trigger tests, or run manually from Actions tab.

## Troubleshooting

- Ensure docs site runs at `http://localhost:3000`
- Tests make real RPC calls to testnet
- View test reports: `npx playwright show-report`
