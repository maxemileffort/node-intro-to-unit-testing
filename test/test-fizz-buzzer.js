// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzz
const fizzBuzz = require('../fizzBuzzer');

// unit tests for our `fizzBuzz` function
describe('fizzBuzz', function () {

    // test the normal case
    it('should change certain numbers to fizz, buzz, or fizz-buzz', function () {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
            { num: 15, expected: 'fizz-buzz' },
            { num: 5, expected: 'buzz' },
            { num: 3, expected: 'fizz' },
            { num: 1, expected: 1 }
        ];
        // for each range of inputs, `fizzBuzz` should
        // produce the expected value
        normalCases.forEach(function (input) {
            const answer = fizzBuzz(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if args not numbers', function () {
        // range of bad inputs 
        const badInputs = [
            'a',
            '1',
            false
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzz(input);
            }).to.throw(Error);
        });
    });
});