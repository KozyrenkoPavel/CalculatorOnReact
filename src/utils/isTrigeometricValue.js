const isTrigeometricValue = (input) => {
  if (
    input.includes('sin') ||
    input.includes('Ln') ||
    input.includes('cos') ||
    input.includes('log') ||
    input.includes('tan') ||
    input.includes('sqrt') ||
    input.includes('exp') ||
    input.includes('x^y')
  ) {
    return true;
  }
};

export default isTrigeometricValue;
