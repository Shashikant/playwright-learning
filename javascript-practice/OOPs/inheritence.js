//1. Extend UITestCase with browser.

class TestCase{

    constructor(testName)
    {
        this.testName = testName;

    }

    execute()
    {
        console.log(`Executing: ${this.testName}`);
    }
}

class UITestCase extends TestCase{

    constructor(testName,browser)
    {
        super(testName);
        this.browser = browser;
    }
    openBrowser(){
        console.log(`Opening browser: ${this.browser}`)
    }
    
}

const logintest = new UITestCase("Login test","Chrome");

logintest.openBrowser();
logintest.execute();