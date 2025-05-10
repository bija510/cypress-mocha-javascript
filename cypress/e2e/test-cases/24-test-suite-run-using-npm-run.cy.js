/**
 * Go to package.json file 
 * By default it run headless in electon browser.
 * By default we have this.
 * "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
    }

    How to terminate Batch job(Means you run whole suite but want to stop)==>CTRL+C ==> Y + Enter
    1. How to run all spec file ===========> npm run test
    2. how to run multiple spec file? =====> npm run multipleTest
    3. How to run Folder in terminal?======> npm run runFolderTest
    4. How to run head Mode to see UI======> npm run headTest
    5. How to run run in specefic browser==> npm run chromeTest
    ############In cypress in some spec fail it will autoRetrive to make sure##########
    we need to add  this in cypress.json "retries": {"runMode": 1 }
    when we see log it will show only one run but if we see screen shot we will see 2 screenshot

 */