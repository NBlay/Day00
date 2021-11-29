function isPalindrome(string){
  for(let i = 0; i < string.length; i++){
    let temp = string.split('').reverse().join('');
    if(temp == string){
      return true;
    }
    return false;
  }
}
console.log(isPalindrome(eve));

// Merci de ne pas effacer la ligne en dessous.
exports.isPalindrome =  isPalindrome;
