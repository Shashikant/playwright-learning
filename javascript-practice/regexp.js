//Write a regex to extract all numbers:

let text = "Order123 shipped on 2026-05-18";

let pattern = /\d+/g;

let numbers = text.match(pattern);
console.log(numbers);
console.log("-------------------------");

//Write a regex that matches valid email addresses.

const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test("qa.lead@example.com"));
console.log("-------------------------");
//Match 10-digit mobile numbers starting with 7, 8, or 9.

let mobilePattern = /^[789]\d{9}$/;

let mobileNumber = "7786323412";

console.log(mobilePattern.test(mobileNumber));
console.log("-------------------------");
//Date Format (YYYY-MM-DD)

let orderText = "Order shipped on 2026-05-18";

let dateFormat = /\d{4}-\d{2}-\d{2}/g;

console.log(orderText.match(dateFormat));
console.log("-------------------------");

//Extract all hashtags from a sentence.

const hashtagPattern = /#\w+/g;
let str = "Learning #QA #Automation #JavaScript"
console.log(str.match(hashtagPattern));

console.log("-------------------------");

//Strong Password Validation -At least 8 characters, one uppercase, one lowercase, one number, one special character.

let passPattern =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
let password = "$esting@1234"

console.log(passPattern.test(password));
console.log("-------------------------");
//Replace multiple spaces with a single space.

let spacePattern = /\s+/g;

let str1 = "QA      Automation   Rocks";

let newText = str1.replace(spacePattern," ");
console.log(newText);

console.log("-------------------------");