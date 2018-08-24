const findMinNum = (str) => {
  let minNumber = str[0];
  console.log(minNumber);
  for (let i = 1; i <= str.length - 1; i += 1) {
    if (str[i] < minNumber) {
      minNumber = str[i];
    }
  }
  return minNumber;
};

const makeBase = (num, len) => {
  let str = '';
  for (let i = 1; i <= len; i += 1) {
    str = `${str}${num}`;
  }
  return str;
};

const calculatePoints = (num1, num2) => {
  const diff = `${num2 - num1}`;
  let sum = 0;
  for (let i = 0; i < diff.length; i += 1) {
    sum += Number(diff[i]);
  }
  return sum;
};
