//Creating a file if it does not exist and then write

const fs = require("fs");

try{
    let data = fs.readFileSync("javascript-practice/Test Data/missing.txt","utf-8");
    console.log("File content", data);

}
catch(err)
{
    console.log("File not found creating new file...");
    fs.writeFileSync("javascript-practice/Test Data/missing.txt", "This is a new file");
    console.log("New file created successfully!");
}