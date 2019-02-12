var Stack = require('./Stack').Stack;
var assert = require('assert');

function matchBrackets(str) {
  var unmatchedStack = new Stack();
  for (var i = 0; i < str.length; i++) {
    if (isClosingBracket(str[i])) {
      // console.log('Close: ', str[i]);
      if (unmatchedStack.count() === 0 || unmatchedStack.pop() !== getOpeningBracket(str[i])) {
        // console.log('Unmatched bracket for - ', str[i]);
        return false;
      }
    } else if (isOpeningBracket(str[i])) {
      // console.log('Open:', str[i]);
      unmatchedStack.push(str[i]);
    }
  }

  return unmatchedStack.count() === 0 ? true : false;
}

function isOpeningBracket(char) {
  return char === '{' || char === '[' || char === '(';
}

function isClosingBracket(char) {
  return char === '}' || char === ']' || char === ')';
}

function getOpeningBracket(char) {
  if (char === '}') {
    return '{';
  }

  if (char === ']') {
    return '[';
  }

  if (char === ')') {
    return '(';
  }

  return null;
}

function main() {
  testMatchBrackets();
}

function testMatchBrackets() {
  assert.equal(matchBrackets('[Ram has jumped (over [Sita] to fetch the ball) but fell down miserably]{Haha!}'), true);
  assert.equal(matchBrackets('One has to (learn [ how to close the { fucking } brackets ) before anything else ]'), false);
  assert.equal(matchBrackets('(Unmatched (paranthesis are a) travesty))'), false);
  assert.equal(matchBrackets('[ Closing (brackets) should be your duty, asswipe!'), false);
  console.log('MatchBrackets: testMatchBrackets() successful');
}

main();
