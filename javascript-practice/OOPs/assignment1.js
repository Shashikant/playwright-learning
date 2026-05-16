class testCases{
    run()
    {
        console.log("Test case executed successfully");
    }
}

const obj = new testCases()
obj.run();


class TestCase {

    run(testName) {
        console.log(`${testName} executed`);
    }

}

const loginTest = new TestCase();

loginTest.run("Login Test");

const logoutTest = new TestCase();
logoutTest.run("Log Out Test");