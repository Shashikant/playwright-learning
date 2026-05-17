//1. Get Current Date & Time

let Currentdate = new Date()
console.log("Current date and time: ",Currentdate);
console.log("------------------");

//2. Get Current Year

console.log("Current year:",Currentdate.getFullYear());

console.log("------------------");
//3. Get Current Month
console.log("Current date:",Currentdate.getMonth()+1);
console.log("------------------");
//4. Format Date

let date = new Date();
let formatted = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(); 
console.log("Formatted date:",formatted);
console.log("------------------");
//5. Compare Two Dates

let date1 = new Date("2026-05-16")
let date2 = new Date("2026-07-06")

if(date1>date2)
{
    console.log("Date 1 is greater than Date 2");
}
else
{
    console.log("Date 2 is greater than Date 1");
    
}
console.log("------------------");
//6. Calculate Difference Between Dates

let start = new Date("2025-01-01");

let end = new Date("2025-01-10");

let diff =
    (end - start) / (1000 * 60 * 60 * 24);

console.log("Difference between two date is:",diff);
console.log("------------------");

//7. String to date
let d = new Date("2025-12-31");

console.log(d);
console.log("------------------");

//8. Find if Current year is leap year

let currentDate = new Date();
let year = currentDate.getFullYear();
if((year % 4 === 0 && year % 100 !==0 )|| year % 400 === 0)
{
    console.log(`Current Year ${year} is leap year.`);
}
else
{
    console.log(`Current year ${year} is not a leap year`);
}
console.log("------------------");
