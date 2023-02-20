# internal-tool-e2e 🐛
Test suite for tarmac internal tool

## **1. Install dependencies**

Download [node](https://nodejs.org/en/download/) 

```
npm i
```

## **2. Install husky**

```
npx husky install
```

## **3. Run linter for javascript files and feature files**
```
npm run lint
npm run gherkin-lint
```

## **4. Start cypress and run tests**
- **Run cypress UI with npm**
    ```
    npm run cypress:open
    ```

- **Run test suites from the terminal**

    ⚠️ Scenarios with WIP or BUG tag are excluded

    ```
    npm run smoke-e2e
    ```