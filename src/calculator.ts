export function addNumbers(numbers: string) {
  if (numbers.length == 0) {
    return 0;
  }

  const numberTokens = parseNumbers(numbers);

  ensureAllNonNegativeNumbers(numberTokens);

  let sum = 0;
  numberTokens.forEach((token) => (sum += token));

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

function ensureAllNonNegativeNumbers(numberTokens: number[]) {
  const negativeNumbers = numberTokens.filter((token) => token < 0);

  if (negativeNumbers.length > 0) {
    const negativeNumbersString = negativeNumbers.join(",");
    throw new Error(`Negative numbers not allowed: ${negativeNumbersString}`);
  }
}

function parseNumbers(numbers: string): number[] {
  const tokens: string[] = tokenize(numbers);
  const numberTokens = tokens.map((token) => parseInt(token));

  return numberTokens.filter((number) => number <= 1000);
}
