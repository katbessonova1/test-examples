
/* Checks if inputed string is a Palindrome.
   @param {string} inputValue
*/
function checkInput(inputVal) {
    const expression = /^[a-zA-Z0-9]+$/;
    if(!(inputVal.match(expression))) {
        updateResult('Please enter a valid string');
        return;
    }
    const palindrome = new Palindrome();
    let isPalindrome = palindrome.check(inputVal);
    let result = !isPalindrome? inputVal + " is not a Palindrome" :  inputVal + " is a Palindrome";
    updateResult(result);
}

/*Updates result in DOM element.
  @param {string} result*/

function updateResult(result) {
    const element = document.getElementById('result');
    if (element) {
        element.innerText = result;
    }
}