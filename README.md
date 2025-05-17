# Cypress Automation README

## Introduction

Cypress is a modern JavaScript-based end-to-end testing framework designed for fast, easy, and reliable testing of web applications. This document provides guidelines for setting up and using Cypress for automation testing.

### Key Features:
- Runs headless in the Electron browser by default.
- The `.text()` feature in Cypress is inherited from the jQuery API.
- Promises support rejection, resolution, and pending states — use `.then()` to handle them.
- Automatically waits for elements to appear without the need for `sleep()`.
- **Screenshots & Videos** – Captures test runs for later review.
- **Visual Test Runner** – Allows you to inspect tests step by step.
- **CI/CD Integration** – Compatible with tools like Jenkins, GitHub Actions, etc.
- **Built-in Assertions** – No need for third-party assertion libraries.
- **Mocha & Chai Support** – Uses familiar testing syntax and BDD/TDD structure.


## Languages Supported by Cypress

| Language   | Support Level      | Notes                                                                                 |
|------------|--------------------|-------------------------------------------------------------------------------------- |
| JavaScript | ✅ Fully supported | The default and native language of Cypress                                            |
| TypeScript | ✅ Fully supported | Officially supported with type definitions and support for modern TypeScript features |

## Supported Selectors in Cypress

| Selector Type | Support Level            | Notes                                                                 |
|---------------|--------------------------|-----------------------------------------------------------------------|
| CSS Selectors | ✅ Fully supported        | Recommended. Cypress supports all standard CSS selectors.            |
| XPath         | ⚠️ Plugin required        | Not supported out-of-the-box, but can be added via `cypress-xpath`.  |

### 1. To install cypress-xpath
```sh
npm install cypress-xpath 
```


### 2. Add the require line For Cypress v10 and later inside: cypress/support/e2e.js
```sh
require('cypress-xpath');
```

### 3. Add this in the script.cy.js file for auto-completion IntelliSense support
```sh
/// <reference types="cypress-xpath" />
```
### 4. Done Example: 
```javascript
cy.xpath("//input[@id='input-firstname']").type('David');
```

## 📘 Cypress-mocha-javascript Naming Conventions Cheat Sheet

This cheat sheet provides a quick reference to standard naming conventions in project to help maintain clean and consistent code.

### 🔠 Naming Conventions Table

| **Element**        | **Convention**      | **Example**                  |
|--------------------|---------------------|------------------------------|
| File Name          | `kebab-case`        | `user-profile.js`            |
| Test File (Cypress)| `kebab-case + .cy`  | `login-page.cy.js`           |
| Folder Name        | `kebab-case`        | `demo-test`                  |
| Component File     | `PascalCase`        | `UserProfile.js`             |
| Function Name      | `camelCase`         | `getUserInfo()`              |
| Variable Name      | `camelCase`         | `userEmail`                  |
| Class Name         | `PascalCase`        | `AuthService`                |
| Constant Name      | `UPPER_CASE`        | `MAX_RETRIES`                |
| Boolean Name       | `camelCase`         | `isLoggedIn`, `hasAccess`    |

### ✅ Summary

- Use **kebab-case** for regular `.js` file names.
- Use **kebab-case + .cy** for Cypress E2E test files `(*.cy.js, *.cy.ts)`.
- Use **PascalCase** for files that export components or classes.
- Use **camelCase** for variables, functions, and booleans.
- Use **UPPER_CASE** for constants that should not change.

## Prerequisites

Ensure you have the following installed before proceeding:

1. `scoop` (alternative for window like homebrew to install software from powershell)
2. `Node.js`
3. A code editor (e.g., `Visual Studio Code`)
4. `Dependencies`
```json
 "dependencies": {
        "browserstack-cypress-cli": "^1.32.7",
        "cypress-downloadfile": "^1.2.4",
        "cypress-xpath": "^2.0.1",
        "typescript": "^5.8.3"
    },
    "devDependencies": {
        "@cypress/grep": "^4.1.0",
        "allure-commandline": "^2.34.0",
        "cypress": "^14.3.3",
        "cypress-file-upload": "^5.0.8",
        "cypress-iframe": "^1.0.1",
        "cypress-mochawesome-reporter": "^3.8.2",
        "del": "^8.0.0",
        "glob": "^11.0.2",
        "mocha-allure-reporter": "^1.4.0",
        "mochawesome-merge": "^5.0.0",
        "rimraf": "^6.0.1"
    }
```

### Step 1: Install Scoop
To install scoop open the `powershell` in window
```sh
irm get.scoop.sh | iex
```
After installation, close and reopen powershell, then run:
```sh
scoop help
```

### Step 2: Install Node.js
```sh
scoop install nodejs
```

To confirm Node.js and npm were installed correctly:
> npm :- used to install, update, and manage JavaScript libraries or tools.

> npx :- npx lets you run Node.js packages without installing them globally.
```sh
node -v
npm -v
npx -v
```

To update the Node.js
```sh
scoop update nodejs
```

### Step 3: Install Cypress

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
### To install all the `dependencies`
```sh
npm install
```


### Opening Cypress

After installation, you can open `Cypress Test runner dashboard` using:

```sh
npx cypress open
```

Or 
```
node_modules/.bin/cypress open
```


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

Create a test file in `cypress/e2e/demo.cy.js`:

```javascript 
describe('My First Test', () => {
  it('Visits a website and checks title', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example');
  });
});
```

## Running from command-line
To `run all the tests` use this command default headless:

```sh
npx cypress run
npx cypress run --headless
npx cypress run --headed
```
To `stop` a running test suite:
```sh
CTRL + C
Terminate batch job (Y/N)?
Y + ENTER
```

To run `single .cy.js` file  `--spec` flag used to run a specific test file 

```sh
npx cypress run --spec cypress/e2e/page-tests/sign-up.cy.js --headed
```

To run tests in a specific browser:
```sh
npx cypress run --spec cypress/e2e/page-tests/sign-up.cy.js --headed --browser chrome
```

To run tests with environment variables:
```sh
npx cypress run --env username=admin,password=1234
node_modules/.bin/cypress run --spec cypress/e2e/test-cases/21-run-from-cmd.js --env url=https://www.google.com/ --headed
npx cypress run --spec cypress/e2e/test-cases/21-run-from-cmd.js --env url=https://www.google.com/ --headed
```

Run tests in a specific viewport:
```sh
npx cypress run --config viewportWidth=1280,viewportHeight=720
```

## Reporting

#### A. Install `allure reporter`
```sh
npm install --save-dev mocha-allure-reporter allure-commandline --legacy-peer-deps
```

#### B. Add this in the `package.json` file inside the scripts
```json
"browser:chrome": "cypress run --browser=chrome --headed --spec cypress/e2e/run-demo/*.js --reporter mocha-allure-reporter" ,
"report:allure": "allure generate allure-results -clean -o allure-report && allure open allure-report",
```

#### C. Run to create a allure-result
```sh
npm run test:smoke
```

#### D. Optional: Serve Without Opening 
> This combines generate and open in one command, but doesn't save the report to a directory.
```sh
allure serve allure-results
```

#### E. To save & create allure report with .html file
```sh
npm run report:allure  
```

#### F. To view the allure report
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

## Custom Commands

You can create reusable commands in `cypress/support/commands.js`:

```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type=submit]').click();
});
```

## Running Cypress Tests via NPM Scripts (package.json)
 ```json
 "scripts": {
      "test": "node_modules\\.bin\\cypress run",
      "multipleTest": "npm run test -- --spec \"cypress/e2e/test-cases/01-click-sendkey.js,cypress/e2e/TestCases/02-print-get-text.js\"",
      "runFolderTest": "npm run test -- --spec \"cypress/e2e/run-demo/*\""
      "headTest": "npm run test -- --headed",
      "chromeTest": "npm run test -- -- browser chrome",
      "recordDashBoardTest": "npm run test -- --record --key 6605097d-f0a9-4f12-bf8e-b53f5fd393b8 --reporter mochawesome",     
    }
  ```

### 1. Run all spec files:
```sh
npm run test
npm run multipleTest
npm run runFolderTest
npm run headTest
npm run chromeTest
npm run recordDashBoardTest
```

### `Auto-retries` for failing specs in cypress
```sh
"retries": {
  "runMode": 1
}

```

## Install `@cypress/grep` to run in cmd using tag name @smoke , @sanity
> https://www.npmjs.com/package/@cypress/grep
```javascript
install 
      npm i -D @cypress/grep --force

cypress.config.js file
      env: {
        grepFilterSpecs: true // Enable filtering specs based on grep
      }

      e2e: {  
        setupNodeEvents(on, config) {
          require('@cypress/grep/src/plugin')(config)
          return config;
        }
      }

support /e2e.js file add this 
      const registerCypressGrep = require('@cypress/grep')
      registerCypressGrep()

cypress run --browser chrome --headed --env grep=@smoke --reporter mocha-allure-reporter

```

### How to search the test method (it) with the tag name = @smoke , @sanity , or @regression in cmd.
```sh
Get-ChildItem -Recurse -Include *.js,*.ts | Select-String "@smoke"
```
## To `run test-suite` with allure report ie: Smoke, sanity, Regression..etc
```sh
npm run test:folder
npm run test:smoke
npm run test:sanity
npm run test:regression
```

## Screenshots on Failure:
- Cypress **automatically captures screenshots** on test failure.
- It **creates a `screenshots/` folder** and saves them there.

## Video Recording:
Add this in the `cypress.config.js` file for video recording of run test cases.
```javascript
module.exports = defineConfig({
  video: true, // ✅ Enable video recording
  videoCompression: 32, // optional: compress video (0 disables compression)
)}
```
Cypress with only this setting `records a video automatically` & save in the **`videos/` folder**.

## Page Object Model (POM)
This project uses the **Page Object Model (POM)** design pattern to organize and maintain test code efficiently.
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
