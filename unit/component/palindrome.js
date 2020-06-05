
/* Palindrome function constructor.
 @constructor */

function Palindrome() {
    this.result;
}
/*Checks if provided string is a Palindrome
  @param {string} string
  @returns {bool}*/
Palindrome.prototype.check = function (str){
    if (str.length === 0) {
        throw Error ('Please enter a string');
    }
    const myStr = str.toLowerCase();
    const reversedStr = Array.from(myStr).reverse().join('');
    if(myStr !== reversedStr) {
        return this.result = false;
    }
    return this.result = true;
};

//  TODO this will error out in the browser console since written for testing purposes only
//   Needs to be properly packaged to run in the browser

module.exports = {
    Palindrome
};
