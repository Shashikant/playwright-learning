//Create a file, delete it and check if it exists

const fs = require("fs")

try {
    fs.writeFileSync("javascript-practice/Test Data/example.txt", "Hello World!")
    console.log("File is created succesfully")
}
catch (err) {
    console.log("Error while creating file", err)
}

try {
    fs.unlinkSync("javascript-practice/Test Data/example.txt");
    console.log("File is deleted successfully")
}
catch (err) {
    console.log("Error while deleting file:", err);
}

if(fs.existsSync("javascript-practice/Test Data/example.txt"))
{
    console.log("File exists");
}
else
{
    console.log("File not available or does not exists");
}