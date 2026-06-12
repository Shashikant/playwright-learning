function countDigits(n) {
let count = 0;
  // Return the number of digits in n
while(n>0)
{
  n = Math.floor(n/10);
  count = count+ 1
}
console.log("Digits: ", count);
}

countDigits(7);