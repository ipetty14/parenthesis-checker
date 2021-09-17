const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { checkParenthesis } = require('./parenthesis-checker');

run = () => {
  readline.question(
    `Please enter a string with parenthesis: `,
    (userString) => {
      const isValid = checkParenthesis(userString);

      if (isValid) {
        readline.write('Valid string!');
      } else {
        readline.write('String has unbalanced parenthesis... ' + userString);
      }

      readline.close();
    }
  );
};

run();
