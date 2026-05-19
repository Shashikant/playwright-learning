//Create JSON file

const fs = require("fs");

let user = {
    username: "John",
    age: "35"
}

fs.writeFileSync("javascript-practice/Test Data/test.json", JSON.stringify(user,null,2));

let data = fs.readFileSync("javascript-practice/Test Data/test.json", "utf-8")
let details = JSON.parse(data);
console.log("Reading data from JSON file:",data);

