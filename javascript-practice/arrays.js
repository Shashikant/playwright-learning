//1.	Store test case names in an array, sort alphabetically.

let arrayTestcases = ["Login Test", "Log Out Test","Sign Up Test", "Payment Test",  "Delete Item Test"];

arrayTestcases.sort();

console.log(arrayTestcases);

console.log("-------------------");

//2. Remove duplicate test cases.
console.log("Using for loop")
let testCases = ["Login Test", "Log Out Test", "Sign Up Test", "Payment Test", "Delete Item Test", "Login Test",
    "Payment Test","Login Test"];

let unique = [];

for (let i = 0; i < testCases.length; i++) {
    
    if (!unique.includes(testCases[i])) {
        unique.push(testCases[i]);
    }
}

console.log("Unique test cases:",unique)
console.log("-------------------");

console.log("Using Set method to filter unique:")
let uniquetestcaes = [...new Set(testCases)];
console.log(uniquetestcaes);

console.log("-------------------");

//3. Map array of test cases → add "Executed" suffix.

let executedTests = uniquetestcaes.map(test => test + " - Executed");
console.log(executedTests);

console.log("-------------------");

//4. Reduce array of durations → total execution time.

let testSuites = [
    { name: "Smoke", duration: 10 },
    { name: "Regression", duration: 25 },
    { name: "API", duration: 15 }
];

let total = testSuites.reduce((sum,suite) => sum+suite.duration,0)
console.log("Total Exxecution Time:",total);

console.log("-------------------");


//5. Use Splice to find smoke test cases - e.g. Login and Logout are smoke tests

let smokeTests = testCases.slice(0,2);
console.log("Smoke test cases are:", smokeTests);

console.log("-------------------");

//6. Find non repeated number
console.log("Non repeated numbers");
let numbers = [1,2,3,4,1,5,7,4,2,8,9]
let uniqueNum = [];

for (let i= 0; i<numbers.length; i++)
{
    if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i]))
    {
        uniqueNum.push(numbers[i])
    }
}
console.log(uniqueNum)

console.log("-------------------");

//7. To find if there are few subjects in which student is failed

let studentMark =[34, 45, 20,60,80,90]

let failed = studentMark.some(mark => mark <35)

console.log("Student is failed in few subjects:",failed)

//8. Sort numbers in ascending order

let ascending = studentMark.sort((a,b) => a-b)
console.log("Marks in ascending order:",ascending);
console.log("-------------------");