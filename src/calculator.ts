export function addNumbers(numbers: string) {
  if (numbers.length == 0) {
    return 0;
  }

  const tokens: string[] = tokenize(numbers);

  let sum = 0;
  tokens.forEach((token) => (sum += parseInt(token)));

  return sum;
}

function tokenize(numbers: string): string[] {
  if (usesCustomDelimiterSyntax(numbers)) {
    return splitUsingCustomDelimiter(numbers);
  }

  return splitUsingNewLineAndComma(numbers);
}

function usesCustomDelimiterSyntax(numbers: string) {
  return numbers.includes("//");
}

function splitUsingCustomDelimiter(numbers: string) {
  const match = numbers.match("//(.)\n(.*)");

  if (match) {
    const customDelimiter = match[1];
    const newNumbers = match[2];

    return newNumbers.split(customDelimiter);
  }

  return [];
}

function splitUsingNewLineAndComma(numbers: string) {
  return numbers.split(/,|\n/);
}
