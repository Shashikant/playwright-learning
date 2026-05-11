let firstname = "Harish Kumar";
let lastname = "Patel";

//Concate
let fullname = firstname + " " + lastname
console.log(fullname);

//Concat using methods
let txt1 = "Hello";
let txt2 = "World!";

console.log(txt1.concat(" ", txt2));


//Template literals
let greetings = `Hello ${firstname}!`  
console.log(greetings);

//String methods

console.log(firstname.toUpperCase());
console.log(lastname.toLowerCase());
console.log(fullname.length);
console.log(firstname.includes("Kumar"));
console.log(firstname.replace("Kumar",""));
console.log(firstname.slice(0,6))
console.log(" Welcome!   ".trim());
console.log(fullname.split('a'))
console.log(fullname.replace("Harish", "Rajesh"));

let text = "Welcome to the Automation!"

console.log(text.charAt(15));
console.log(text.charCodeAt(0));
console.log(text.at(-2)); 


console.log(text.substring(15,19))

let str = "5";
console.log(str.padStart(4,"0"));
console.log(str.padEnd(4,"0"));
