/* eslint-disable no-eval */
const ALLOWED_CHARACTERS = ['*', '/', '+', '-', '.'];
const multiplySign = /x/gi;
const dividerSign = /%/gi;

const evaluateExpression = (expression) => {
  const [first, second, ...others] = [...expression];

  if (first === '0' && !ALLOWED_CHARACTERS.includes(second)) {
    const removeFirst = [...expression].slice(1).join('');
    return evaluateExpression(removeFirst);
  }

  if (ALLOWED_CHARACTERS.includes(others.pop())) {
    const removeLast = [...expression].slice(0, -1).join('');
    return evaluateExpression(removeLast);
  }

  return expression;
};

const formatterSigns = (value) => {
  let formattedValue = value;
  formattedValue = formattedValue.replace(multiplySign, '*');
  formattedValue = formattedValue.replace(dividerSign, '/');

  return formattedValue;
};

export const calculateFn = (value) => {
  try {
    let result = 0;
    const formattedValue = formatterSigns(value);

    result = eval(evaluateExpression(formattedValue));
    if (result === Infinity) {
      result = 'Error';
    }

    return result;
  } catch (Ex) {
    return 'Syntax error';
  }
};
