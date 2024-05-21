const getFactorial = (value) => {
  let count = 0;

  if (!Number(value)) {
    if (value === '') value = 0;
    if (Number(value) === 0) return (value = 1);

    return (value = 'Error');
  }

  for (let i = 1; i <= Number(value); i++) {
    if (count === 0) count = i;
    count *= i;
  }

  return (value = count);
};

export default getFactorial;
