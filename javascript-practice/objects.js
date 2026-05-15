//1. Basic object

const user = {
    name: "Vishwakarma",
    age: 25,
    occupation: "IT Service",
    experience: 18
}

console.log(user.name);
console.log(user["age"]);
console.log(user.occupation);
console.log(user["experience"]);


user.role = "QA Lead"; //To add new key value
console.log(user)

delete user.age; //To delete any key value
console.log(user)
console.log("-----------------------------")

//2. Nested Objects

let student = {
    name: "Sam",

    marks: {
        math: 90,
        science: 95,
        english: 80
    }
};

console.log("Marks in English:", student.marks.english);
console.log("-----------------------------")

//3. Objects with Functions (Methods)

let emplaoyee = {
    name: "Rajan",

    greet: function()
    {
        console.log("Welcome " + this.name + "!");

    }
}
emplaoyee.greet();
console.log("-----------------------------")

let tests = {
    tc_id: "TC_001",
    description: "Verify login page",
    steps: ["Open login page", "Enter valid credentials", "Click on login button"],
    expectedresult: "User should be successfully login",
    status: "Pass",

    execute: function()
    {
        console.log(`Executing: ${this.description}`);
    },

    updateStatus: function(teststatus)
    {
        this.status = teststatus;
        console.log(`Status is: ${teststatus}`);
    },

    runningSteps: function()
    {
        console.log(`Runing steps for: ${this.tc_id}`)

        this.steps.forEach((steps, index) => {
            console.log(`Steps ${index+1}: ${steps}`);
        })

    }
}

tests.execute();
tests.runningSteps();
tests.updateStatus("Fail");
console.log(tests);

console.log("-----------------------------")

//4. Array of Objects

let testCases = [
    { id: 1, status: "Pass" },
    { id: 2, status: "Fail" },
    { id: 3, status: "Pass" }
];

console.log(testCases[0].status);

console.log("-----------------------------")

//5. Looping Through Objects

const employee = {
  name: "Shashikant",
  role: "QA Manager",
  skills: ["Manual Testing", "Automation", "Playwright"]
};

for (let key in employee) {
  console.log(`${key}: ${employee[key]}`);
}
console.log("-----------------------------")

//6. Store Multiple Test Cases


let testSuite = [
    {
        tc_id: "TC_001",
        description: "Verify login page",
        status: "Not Executed"
    },
    {
        tc_id: "TC_002",
        description: "Verify logout functionality",
        status: "Not Executed"
    }
];

testSuite.forEach(tc => {
    console.log(`${tc.tc_id}: ${tc.description} -> ${tc.status}`);
});
console.log("-----------------------------")

//7. Object destruction

let tester = {
    name1: "Mike",
    domain: "iGaming"
};

let { name1, domain } = tester;

console.log(name1);
console.log(domain);

console.log("-----------------------------")

//8. Spread Operator with Objects

let obj1 = {
    name: "Sam"
};

let obj2 = {
    ...obj1,
    role: "Tester"
};

console.log(obj2);