exports.checkParenthesis = (userInput) => {
  // Expandable map that can be used to check for any pairing of values.
  const charMap = {
    ')': '(',
  };

  let frontParenthesisStack = [];
  let backParenthesisStack = [];

  for (let i = 0; i < userInput.length; i++) {
    // Check if we have a value on the stack to pair with the closing parenthesis found.
    // If no, then we add that as a loose parenthesis
    if (frontParenthesisStack.length === 0 && userInput[i] === ')') {
      backParenthesisStack.push(userInput[i]);
    }

    // If the string contains an opening parenthesis, we add it to the stack
    // and expect it to come off when we find a closing one as well.
    if (userInput[i] === '(') {
      frontParenthesisStack.push(userInput[i]);
    } else if (
      frontParenthesisStack[frontParenthesisStack.length - 1] ===
      charMap[userInput[i]]
    ) {
      // Use the map defined above to look for the closing parenthesis.
      // If a value is found on the stack then we pop it off as part of the
      // valid pairing and move on.
      frontParenthesisStack.pop();
    }
  }

  // If either of the stacks have something left then we have an imbalanced string.
  return frontParenthesisStack.length === 0 && backParenthesisStack.length === 0
    ? true
    : false;
};
