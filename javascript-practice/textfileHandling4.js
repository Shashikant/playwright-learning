//Overwrite a file

const fs = require("fs")

fs.writeFileSync("javascript-practice/Test Data/overwrite.txt",
    "Initial Contents"
)
let data = fs.readFileSync("javascript-practice/Test Data/overwrite.txt","utf-8");
console.log("Original contents:", data)

fs.writeFileSync("javascript-practice/Test Data/overwrite.txt", "New Content Replaced");

let latestData = fs.readFileSync("javascript-practice/Test Data/overwrite.txt", "utf-8")
console.log("Latest data:", latestData);
