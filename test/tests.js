const { describe } = require('mocha');
const assert = require('assert');
const { checkParenthesis } = require('../parenthesis-checker');

describe('Valid pairs', () => {
  it('No pairs', () => {
    const validParenthesis = checkParenthesis('Hello world');

    assert(validParenthesis);
  });

  it('1 pair', () => {
    const validParenthesis = checkParenthesis('(6 4 2)');

    assert(validParenthesis);
  });

  it('2 pairs', () => {
    const validParenthesis = checkParenthesis("(filter '(6 4 3 5 2) #'even)");

    assert(validParenthesis);
  });

  it('4 pairs', () => {
    const validParenthesis = checkParenthesis(
      '(defun even(num) (= (mod num 2) 0))'
    );

    assert(validParenthesis);
  });

  it('7 pairs', () => {
    const validParenthesis = checkParenthesis(
      "(most '(3 46 7 -72 6 -8) #'(lambda (x y) (> (* x x) (* y y))))"
    );

    assert(validParenthesis);
  });
});

describe('Not valid pairs', () => {
  it('All opening', () => {
    const invalidParenthesis = checkParenthesis('((((');

    assert.notEqual(invalidParenthesis, true);
  });

  it('All closing', () => {
    const invalidParenthesis = checkParenthesis('))))');

    assert.notEqual(invalidParenthesis, true);
  });

  it('Unbalanced', () => {
    const invalidParenthesis = checkParenthesis('())');

    assert.notEqual(invalidParenthesis, true);
  });
});
