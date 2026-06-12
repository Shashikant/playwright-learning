// Reverse its digits and print the result as a number (no leading zeros).
let n = 100;

// Reverse and print
let str = n.toString();
let x = str.split("");
let rev = x.reverse().join("")
console.log(parseInt(rev));

console.log("------------------------");

let revNum = 0;
while (n > 0) {
  revNum = revNum * 10 + n % 10;
  n = Math.floor(n / 10);
}
console.log(revNum);