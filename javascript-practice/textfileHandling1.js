const fs = require("fs");

fs.writeFileSync(
    "javascript-practice/Test Data/testFile.txt",
    "Hello QA Automation"
);

console.log("File created successfully");

fs.appendFile("javascript-practice/Test Data/testFile.txt", "\nPlaywright Automation World!", (err) => {
    if (err) {
        console.error("Error appending to file:", err);
    } else {
        console.log("Data appended successfully!");
    
    let data = fs.readFileSync(
        "javascript-practice/Test Data/testFile.txt",
        "utf-8"
    );
    console.log("File contents are:"+"\n",data );
    }
});
