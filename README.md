# Cypress Automation README

## Introduction

- Cypress is a modern JavaScript-based end-to-end testing framework designed for fast, easy, and reliable testing of web applications. This document provides guidelines for setting up and using Cypress for automation testing.
- Cypress only support css-selector.
- The `.text()` feature in Cypress is not unique to Cypress itself—it comes from the jQuery API.
- Promise comes with rejection, resolved , pending `we use then() to solve promise`.
- Waits for elements to appear without sleep().
- Screenshots & Videos – Captures test runs for review.
- Visual test runner to inspect tests step by step.
- CI/CD Integration – Works with tools like Jenkins, GitHub Actions, etc.
- Built-in Assertions – No need for third-party libraries.
- Support for Mocha & Chai – Uses familiar syntax for writing tests.

## 📘 JavaScript Naming Conventions Cheat Sheet

This cheat sheet provides a quick reference to standard naming conventions in JavaScript to help maintain clean and consistent code.

### 🔠 Naming Conventions Table

| **Element**        | **Convention** | **Example**                  |
|--------------------|----------------|------------------------------|
| File Name          | `kebab-case`   | `user-profile.js`            |
| Component File     | `PascalCase`   | `UserProfile.js`             |
| Function Name      | `camelCase`    | `getUserInfo()`              |
| Variable Name      | `camelCase`    | `userEmail`                  |
| Class Name         | `PascalCase`   | `AuthService`                |
| Constant Name      | `UPPER_CASE`   | `MAX_RETRIES`                |
| Boolean Name       | `camelCase`    | `isLoggedIn`, `hasAccess`    |

### ✅ Summary

- Use **kebab-case** for regular `.js` file names.
- Use **PascalCase** for files that export components or classes.
- Use **camelCase** for variables, functions, and booleans.
- Use **UPPER_CASE** for constants that should not change.

## Prerequisites

Ensure you have the following installed before proceeding:

- scoop (alternative for window like homebrew)
- Node.js (LTS version recommended)
- npm or yarn
- A code editor (e.g., Visual Studio Code)

## Step 1: Install Scoop
To install scoop open the powershell in window
```sh
irm get.scoop.sh | iex
```
After installation, close and reopen PowerShell, then run:
```sh
scoop help
```

## Step 2: Install Node.js
```sh
scoop install nodejs
```

To confirm Node.js and npm were installed correctly:
- npm :- used to install, update, and manage JavaScript libraries or tools.
- npx :- npx lets you run Node.js packages without installing them globally.
```sh
node -v
npm -v
npx -v
```

To update the Node.js
```sh
scoop update nodejs
```

## Step 3: Install Cypress

To install Cypress, navigate to your project directory and run:

```sh
npm install cypress --save-dev
```
Or to when we suspect it is corrupted, incomplete, or you want to ensure you have the latest version.
```sh
npx cypress install --force
```
If vulnerabilities 
```sh
npm audit fix --force
```
## Opening Cypress

After installation, you can open Cypress using:

```sh
npx cypress open
```

Or 
```
node_modules/.bin/cypress open
```

This will launch the Cypress Test Runner.

## Folder Structure

After running Cypress for the first time, a default folder structure is created:

```
/cypress
  ├── e2e
  ├── fixtures
  ├── plugins
  ├── screenshots
  ├── support
  ├── videos
  ├── cypress.config.json
  ├── package.json
```

- **e2e/**: Contains test scripts.
- **fixtures/**: Store test data.
- **plugins/**: Customize Cypress behavior ie:- Listeners
- **support/**: Reusable functions and commands.
- **videos/**: Stores recorded test runs.
- **screenshots/**: Captured screenshots from tests.
- **cypress.config.json**: Configuration settings.
- **package.json**: Manages a Node.js project's metadata, dependencies, scripts, and configuration, serving as the central hub for defining how the project runs, builds, and interacts with other packages.

## Writing Your First Test

Create a test file in `cypress/e2e/`:

```javascript
describe('My First Test', () => {
  it('Visits a website and checks title', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example');
  });
});
```

Run tests using:

```sh
npx cypress run
```

## Running Tests in CI/CD

To run tests in a headless mode:

```sh
npx cypress run --headless
```
Or

```sh
npx cypress run --headed
npx cypress run --spec cypress/e2e/page-tests/sign-up-test.js --headed
npx cypress run --spec cypress/e2e/page-tests/sum-of-product-function.js --headed
```
For integration with CI/CD pipelines, refer to Cypress documentation on CI setup.

## Run tests in a specific browser:
```sh
npx cypress run --browser chrome
```
## Run tests in a specific spec file:
```sh
npx cypress run --spec cypress/e2e/test.spec.js
npx cypress run --spec cypress/e2e/page-tests/sign-up-test.js --headed
npx cypress run --spec cypress/e2e/page-tests/sum-of-product-function.js --headed
```
## Run tests with environment variables:
```sh
npx cypress run --env username=admin,password=1234
node_modules/.bin/cypress run --spec cypress/e2e/test-cases/21-run-from-cmd.js --env url=https://www.google.com/ --headed
npx cypress run --spec cypress/e2e/test-cases/21-run-from-cmd.js --env url=https://www.google.com/ --headed
```
## Run tests in a specific viewport:
```sh
npx cypress run --config viewportWidth=1280,viewportHeight=720
```
## Open Cypress with a specific project path:
```sh
npx npx cypress open --project /path/to/project
```
## Custom Commands

You can create reusable commands in `cypress/support/commands.js`:

```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type=submit]').click();
});
```

## Reporting

### A. Install `allure reporter`
```sh
npm install --save-dev mocha-allure-reporter allure-commandline --legacy-peer-deps
```

### B. Add this in the package.json file inside the scripts
```sh
"browser:chrome": "cypress run --browser=chrome --headed --spec cypress/e2e/run-demo/*.js --reporter mocha-allure-reporter" ,
"report:allure": "allure generate allure-results -clean -o allure-report && allure open allure-report",
```

### C. Run to create a allure-result
```sh
npm run browser:chrome 
```

### D. Optional: Serve Without Opening 
> This combines generate and open in one command, but doesn't save the report to a directory.
```sh
allure serve allure-results
```

### E. To save & create allure report with .html file
```sh
npm run report:allure  
```

### F. To view the allure report
```sh
allure open allure-report  
```

## To install `mochawesome` & generate reports

```sh
npm install --save-dev mochawesome
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

Run tests with reporting:

```sh
npx cypress run --reporter mochawesome
npx cypress run --reporter mochawesome --spec cypress/e2e/page-tests/sum-of-product-function.js --headed
```
> **Note**: Run from the **terminal** to enable automatic screenshot and video capture.

## Cypress Default Behavior

- By default, it runs headless in the Electron browser.
- The default `package.json` contains:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
## To stop a running test suite:
```sh
CTRL + C
```
```sh
Terminate batch job (Y/N)?
Y + ENTER
```
## Running Cypress Tests via NPM Scripts `(package.json)`
```sh
 "scripts": {
        "test": "node_modules\\.bin\\cypress run",
        "multipleTest": "npm run test -- --spec \"cypress/e2e/test-cases/01-click-sendkey.js,cypress/e2e/TestCases/02-print-get-text.js\"",
        "runFolderTest": "npm run test -- --spec \"cypress/e2e/run-demo/*\""
        "headTest": "npm run test -- --headed",
        "chromeTest": "npm run test -- -- browser chrome",
        "recordDashBoardTest": "npm run test -- --record --key 6605097d-f0a9-4f12-bf8e-b53f5fd393b8 --reporter mochawesome",
       
        
    },
```


### 1. Run all spec files:
```sh
npm run test
```

### 2. Run multiple specific spec files:
```sh
npm run multipleTest
```

### 3. Run a folder of tests:
```sh
npm run runFolderTest
```

### 4. Run in head mode to see the UI:
```sh
npm run headTest
```

### 5. Run in a specific browser (e.g., Chrome):
```sh
npm run chromeTest
```

### 6. Run test in record mode with report & screenshot on failure
```sh
npm run recordDashBoardTest
```

### Auto-Retries for Failing Specs in Cypress
```sh
"retries": {
  "runMode": 1
}

```

## Screenshots on Failure:
- Cypress **automatically captures screenshots** on test failure.
- It **creates a `screenshots/` folder** and saves them there.

## Video Recording:
- Cypress also **records a video** of the test run.
- Videos are saved inside the **`videos/` folder**.

## Folder Structure Best Practice:
- Place `page-objects/` inside the `support/` folder.
- ⚠️ Do **not** place it in `e2e/` — Cypress will attempt to execute it as a test.


## Best Practices

- Use `data-test` attributes for selectors.
- Avoid using `cy.wait()` with fixed timeouts.
- Leverage Cypress fixtures for test data.
- Keep tests independent and modular.

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress GitHub Repository](https://github.com/cypress-io/cypress)

## Conclusion

This README provides the basics to get started with Cypress. Happy Testing!
