class BaseUITest {
    constructor(testName) {
        this.testName = testName;
    }
    run() {
        console.log(`Running test: ${this.testName}`);
    }
}

class UITestCase extends BaseUITest {
    constructor(testName, browser) {
        super(testName);
        this.browser = browser;
    }

    openBrowser() {
        console.log(`Launching browser: ${this.browser}`);
    }
}

class deviceTest extends UITestCase {
    constructor(browser, testName, mobile) {
        super(browser, testName);
        this.mobile = mobile
    }

    mobileTest() {
        console.log(`Opening mobile device ${this.mobile}`)
    }
}

const test = new deviceTest("Login Test", "Safari", "iPhone 16")
test.run();
test.openBrowser();
test.mobileTest();