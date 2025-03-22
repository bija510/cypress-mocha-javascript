# Cypress Automation README

## Introduction

Cypress is a modern JavaScript-based end-to-end testing framework designed for fast, easy, and reliable testing of web applications. This document provides guidelines for setting up and using Cypress for automation testing.

## Prerequisites

Ensure you have the following installed before proceeding:

- Node.js (LTS version recommended)
- npm or yarn
- A code editor (e.g., Visual Studio Code)

## Installation

To install Cypress, navigate to your project directory and run:

```sh
npm install cypress --save-dev
```
Or to when we suspect it is corrupted, incomplete, or you want to ensure you have the latest version.
```sh
npx cypress install --force
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
/cypress.config.json
```

- **e2e/**: Contains test scripts.
- **fixtures/**: Store test data.
- **plugins/**: Customize Cypress behavior ie:- Listeners
- **support/**: Reusable functions and commands.
- **videos/**: Stores recorded test runs.
- **screenshots/**: Captured screenshots from tests.
- **cypress.json**: Configuration settings.

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
```
For integration with CI/CD pipelines, refer to Cypress documentation on CI setup.

## Run tests in a specific browser:
```sh
npx cypress run --browser chrome
```
## Run tests in a specific spec file:
```sh
npx cypress run --spec cypress/e2e/test.spec.js
```
## Run tests with environment variables:
```sh
npx cypress run --env username=admin,password=1234
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

To generate reports, install:

```sh
npm install --save-dev mochawesome
```

Run tests with reporting:

```sh
npx cypress run --reporter mochawesome
```

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
