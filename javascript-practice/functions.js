//1. runTest(testName) → prints execution.

function testRun(testname) {
    console.log("Executing", testname);
}

testRun("Login Test");
testRun("Payment Test");
console.log("------------------------")


//2. generateRandomEmail() → returns unique email.

function emailId(username) {
    let email = "";
    let emailIds = [];
    for (let i = 0; i < 100; i++) {
        email = username + i + Math.floor(Math.random() * 1000) + "@test.com"

        emailIds.push(email);
    }
    return emailIds
}

let user_emailIds = emailId("test");
console.log("Email Id List:", user_emailIds);

console.log("------------------------")

//3. maskPassword(str) → replaces chars with *.

function maskPassword(password) {

    let masked = "";
    for (let i = 0; i < password.length; i++) {
        masked += "*";
    }

    return masked;
}

console.log("Masked Password: ", maskPassword("Secret"))
console.log("------------------------")

//4. validateDropdown(options, expected) → returns missing values.

function validateDropdown(options, expected) {
    let missing = [];

    for (let i = 0; i < expected.length; i++) {
        if (!options.includes(expected[i])) {
            missing.push(expected[i]);
        }
    }

    return missing;
}

let options = ["India", "USA", "UK"];

let expected = ["India", "Germany", "UK"];

console.log("Missing options:", validateDropdown(options, expected));
console.log("------------------------")


// 5. calculateDuration(start, end) → returns ms.

function calculateDuration(start, end) {
    return end - start
}

console.log("Execution time:", calculateDuration(100, 500) + "ms");

console.log("------------------------")

//6. 1, 0 square Pattern with diagonal 1

function squarePattern(len) {
    let pattern = "";
    for (let i = 0; i < len; i++) {

        let str = "";
        for (let j = 0; j < len; j++) {

            if (i === j) {
                str += "1" + " "
            }
            else {
                str += "0" + " "
            }

        }
        pattern += str + "\n"

    }
    return pattern
}

console.log(squarePattern(3))
console.log("------------------------")


//7. Increasing and Decreasing Number Pattern

function increasingDecreasing(len) {
    let str1 = ""
    for (let i = 1; i <= len; i++) {
        str1 += i + " ";
        console.log(str1);
    }

    for (let i = len; i > 0; i--) {
        let str = "";
        for (let j = 1; j < i; j++) {
            str += j + " ";
        }
        console.log(str);
    }
}

console.log("\nIncreasing and Decreasing Number Pattern...\n");
increasingDecreasing(5);
console.log("------------------------")

//8. Check even odd number

function evenOdd(num) {
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log("Given number is:", evenOdd(4))
console.log("------------------------")

//9. Factorial of a number

function factofNum(num) {
    if (num < 0) {
        return "Factorial is not defined for negative number";
    }

    {
        let fact = 1
        while (num > 0) {

            fact = fact * (num)
            num--;
        }
        return fact
    }
}

let a = factofNum(5);
console.log("Factorial of number is: ", a);
console.log("------------------------")

//10. Prime number list

function primeNumbers(range)
{
    
    let list = "\n";
    for (let i=2; i<=range; i++)
    {
        let isPrime = true
        for(let j=2; j<=Math.sqrt(i); j++)
        {
            if(i % j === 0)
            {
                isPrime = false
                break
            }
            
        }

        if(isPrime)
        {
            list += i + "\n"
        }
        
    }
    return list
}

console.log("Prime numbers:", primeNumbers(100))
console.log("------------------------")