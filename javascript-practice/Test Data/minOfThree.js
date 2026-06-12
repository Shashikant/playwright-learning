const x = -3;
const y = 0;
const z = -1;

function minOfThree(a, b, c) {
if( a > b && b > c )
{
  console.log("Min: ", c)
}
  else if( b > a && a > c )
{
  console.log("Min: ", c)
}
 else if( c > a && a > b )
{
  console.log("Min: ", b)
}
else if( b > c && c > a )
{
  console.log("Min: ", a)
}
else if( c > b && b > a )
{
  console.log("Min: ", a)
}
  else
  {
    console.log("Min: ", a)
  }
}
  // Return the smallest of the three numbers
minOfThree(x,y,z)