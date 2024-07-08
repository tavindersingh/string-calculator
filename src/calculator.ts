export function addNumbers(numbers: string) {
  if (numbers.length == 0) {
    return 0;
  }

  const tokens: string[] = tokenize(numbers);

  let sum = 0;
  tokens.forEach((token) => (sum += parseInt(token)));

  return sum;
}

function tokenize(numbers: string) {
  if (numbers.includes("//")) {
    const match = numbers.match("//(.)\n(.*)");
    const limiter = match!.groups ?? [0];

    if (match) {
      const customDelimiter = match[1];
      const newNumbers = match[2];

      return newNumbers.split(customDelimiter);
    }
  }

  return numbers.split(/,|\n/);
}

console.log(addNumbers("//;\n1;2;3"));
