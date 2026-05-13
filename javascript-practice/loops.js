// A. Loop: do while

//1. Print Numbers 1 to 10


let i = 1;
console.log("\n1 to 10 numbers:")
do {
    console.log(i);
    i++;
}
while (i <= 10)

// 2. Print Even Numbers from 2 to 20

let num = 1;
console.log("\nEven numbers from 1 to 20 range:")
do {
    if (num % 2 === 0) {
        console.log(num)
    }
    num++
}
while (num <= 20)

// 3. Print Multiplication Table

let num1 = 5;
console.log(`\nTable of ${num1} is: `)
let j = 1;
do {
    console.log(num1 * j)
    j++;
}
while (j <= 10);

//4. Reverse a Number

let number = 345;
let revrsenumber = 0;
let digit = 0;
do {

    digit = number % 10;
    revrsenumber = (revrsenumber * 10) + digit;
    number = Math.floor(number / 10);
}
while (number > 0)
console.log("\nReverse of given number is:", revrsenumber);

//5. Count Digits in a Number

let num2 = 123;
let digit1 = 0;
let count = 0;
do {
    digit1 = num2 % 10;
    num2 = Math.floor(num2 / 10)
    count = count + 1
}
while (num2 > 0);

console.log("\nDigits in number are:", count)

//6. Sum of Digits

let num3 = 458;
let sum = 0;

do {
    sum += num3 % 10;
    num3 = Math.floor(num3 / 10);
}
while (num3 > 0)
console.log("Sum of digits is: ", sum)


//7. Count Even and Odd Digits

let num4 = 44663;
let temp = 0;
let evencount = 0;
let oddcount = 0;
do {
    temp = num4 % 10;
    if (temp % 2 === 0) {
        evencount = evencount + 1
    }
    else {
        oddcount = oddcount + 1
    }
    num4 = Math.floor(num4 / 10);

}
while (num4 > 0)
console.log("Even count: ", evencount)
console.log("Odd count: ", oddcount)

//8. Find Largest Digit in a Number

let num5 = 114692;
let maxDigit = 0;
let digit2 = 0;
do {
    digit2 = num5 % 10;
    if (digit2 > maxDigit) {
        maxDigit = digit2;
    }
    num5 = Math.floor(num5 / 10);
}
while (num5 > 0)
console.log("Max digit is:", maxDigit);



// B. Loop: while loop

//1. Print Numbers from 10 to 1

let num6 = 10;
console.log("Number from 10 to 1: ")
while(num6>0)
{
    console.log(num6)
    num6--;
}

//2.Find Product of Digits

let num7 = 34512;
let prod = 1;
let digit3 = 0;

while(num7>0)
{
    digit3 = num7 % 10;
    prod = prod * digit3
    num7 = Math.floor(num7/10);
}
console.log("Product of digits is: ", prod);

//3. Check Palindrome Number

let num8 = 1213;
let digit4 = 0;
let reverse1 = 0;
let temp1 = num8;
while(temp1>0)
{
    digit4 = temp1 % 10;
    reverse1 = (reverse1 * 10) + digit4;
    temp1 = Math.floor(temp1/10);
}
if (num8 == reverse1)
{
    console.log(`${num8} is a Palindrome Number`);

}
else
{
    console.log(`${num8} is not a Palindrome Number`);
}

//4. Check Palindrome Number using string based 

let num9 = 545
let str = num9.toString();
let reverse2 = str.split('').reverse().join('');
if (str === reverse2)
{
     console.log(`${num9} is a Palindrome Number`);
}
else
{
    console.log(`${num9} is not a Palindrome Number`);
}

//5. Find Factorial

let number1 = 8;

let factorial = 1;

while(number1 >0)
{
    factorial = factorial * (number1);
    number1--;
}

console.log(`Factorial of is:`, factorial);


//6.Print * in Triangle Pattern

let star = ""
let length = 5;
let k = 1;
console.log("\nTriangle pattern: ");
while(length>0)
{
    
    star += "*"
    console.log(star)
    length--
}

//7. Print Reverse Triangle

console.log("\nReverse Triangle Pattern: ")
let length1 = 5;
let stars = ""
while (length1 > 0) {
    stars = ""
    let i = 0;
    while (i < length1) {
        stars += "*";
        i++;
    }
    console.log(stars);
    length1--

}

//C. For Loop

//1. Find Sum of First 100 Numbers

let range = 100;
let add = 0;

for (let i = 1; i<=100; i++)
{
    add += i;
}
console.log("Sum of first 100 numbers is: ", add)


//2. Reverse a String Using for Loop

let text = "Hello";
let len = text.length;
let ch = "";

for(let i = len-1; i>=0; i--)
{
    ch += text[i];
}
console.log(`Reverse of "${text}" is:  `, ch);


//3. Count Vowels in a String

let string1 = "Automation!";
let count1 = 0;

for (let i = 0; i < string1.length; i++) {
    let ch = string1[i].toLocaleLowerCase();
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count1 = count1 + 1
    }

}
console.log(`"${string1}" text contains vowels:`, count1);


//4. Check Prime Number

let number2 = 131;
let isPrime = true;

for (let i = 2; i <=Math.sqrt(number2); i++) {
    if (number2 % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`Nummber ${number2} is Prime number.`);
}
else {
    console.log(`Nummber ${number2} is Not a Prime number.`);
}


//5. Find Prime Number list from 1 to 100

let range1 = 100;

let list = [];
for (let i = 2; i<=range1; i++){
    let isPrime1 = true;
    for (let j = 2; j <=Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime1 = false;
            break;
        }
    }

    if(isPrime1)
    {
        list.push(i);
    }
    
}

console.log(list);

//6. Find Largest Number in Array

let arr1 = [-10, -20, -34, -55, -99, -87];
let maxnumber = arr1[1];
for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] > maxnumber) {
        maxnumber = arr1[i];
    }
}

console.log("\nMax number is: ", maxnumber);
console.log("__________________________")
//7. Nested loop: browsers × test cases → print execution matrix.

let browsers = ["Chrome", "Firefox","Edge"];
let testCases = ["Login", "Sign Up", "Payment Test"];

for(let i = 0; i<browsers.length; i++)
{
    console.log("Browser:", browsers[i]);
    for(let j = 0; j<testCases.length; j++){
        console.log("Running", testCases[j]+ " On " + browsers[i]);
    }
    console.log("__________________________")
}

//8. Loop through log lines, extract only error messages.

let logs = [
    "INFO: Browser launched",
    "INFO: User logged in",
    "ERROR: Payment failed",
    "WARNING: Slow response",
    "ERROR: API timeout"
];

for (let i =0 ; i < logs.length; i++)
{
    let line = logs[i];

    if(line.includes("ERROR"))
    {
        console.log(line);
    }
}
console.log("__________________________")


//9. Loop through dropdown options, validate expected values.

let actualCountry = ["India", "UK", "Japan", "US"];
let expectedCountry = ["India", "China", "Japan"];

for( i = 0; i<expectedCountry.length; i++)
{
    let expected = expectedCountry[i];

    if(actualCountry.includes(expected))
    {
        console.log("Dropdown value is present:", expected);
    }
    else
    {
        console.log("Dropdown value is missing", expected);
    }
}
console.log("__________________________")

//10.	Generate test data: 50 random usernames

let username = "";

for(i=1; i<=50; i++)
{
    let randomnumber = Math.floor(Math.random()*1000);
    username = "user" + randomnumber;
    console.log(username);
}