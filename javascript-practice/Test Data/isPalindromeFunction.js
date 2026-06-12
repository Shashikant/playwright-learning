function isPalindrome(word) {
  let reverse = word.split("").reverse().join("");
	if(reverse === word)
  {
    console.log("Yes");
  }
  else
  {
    console.log("No")
  }
}
isPalindrome("racecar") 