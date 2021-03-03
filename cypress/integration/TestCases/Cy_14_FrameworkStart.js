/*******************************************************************************
1. Setting up the hooks
2. Data driven testing with fixture
3. Building custom cypress command
4. parameterize test with multiple Data sets
5. Understanding the test debugginh
6. Build page object design patten for objects
7. Configuration change in cypress.json
8. screenshots and video recording for Test
9. Exploring cypress dashboard
10.Understanding the environmental variables of cypress
11.Generate excillent report for Test execution result
12.Integrate cypress test with Jenkins
*******************************************************************************/
beforeEach(() => {
    // root-level hook
    // runs before every test
})

describe('Hooks', () => {
    before(() => {
        // runs once before all tests in the block
    })

    beforeEach(() => {
        // runs before each test in the block
    })

    afterEach(() => {
        // runs after each test in the block
    })

    after(() => {
        // runs once after all tests in the block
    })
})