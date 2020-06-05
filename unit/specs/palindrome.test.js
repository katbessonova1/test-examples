const { Palindrome } = require('../component/palindrome');

describe('palindrome', function() {

    let palindrome;
    beforeEach(function() {
        palindrome = new Palindrome();
    });
    it('verify that given string is a palindrome', function() {
        palindrome.check('0aNna0');
        expect(palindrome.result).toBeTruthy();
    })
    it('verify that given string is not a palindrome', function() {
        palindrome.check('croc');
        expect(palindrome.result).toBeFalsy();
    })
    it('verify that empty string is handled', function() {
        expect(function(){palindrome.check('')}).toThrowError(Error,'Please enter a string');
    })
});