/*==================================================================================
https://docs.cypress.io/guides/core-concepts/dashboard-service.html#Overview
The Dashboard allows you to:
See the number of failed, passing, pending and skipped tests.
Get the entire stack trace of failed tests.
View screenshots taken when tests fail or when using cy.screenshot().
Watch a video of your entire test run or a video clip at the point of test failure.
See how fast your spec files ran within CI including whether they were run in parallel.
See related groupings of tests.
Manage who has access to your recorded test data.
See usage details for each organization.
Pay for your selected billing plan.

1. Check cypress.json file into source control. Why?
{
  "projectId": "w4cmd4"
}
2. Run this command now, or in CI. Need help?
cypress run --record --key 6605097d-f0a9-4f12-bf8e-b53f5fd393b8

TO RUN:- 1. npx cypress run --record --key 6605097d-f0a9-4f12-bf8e-b53f5fd393b8
         2. node_modules\.bin\cypress run --record --key 6605097d-f0a9-4f12-bf8e-b53f5fd393b8
         then it will run in 2 place 1 local and another in cypress dashboard inside run
=====================================================================================*/